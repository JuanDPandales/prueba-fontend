import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { User, UserStore } from '../types';
import { apiService } from '../services/api';

const USERS_PER_PAGE = 8;
const CACHE_KEY = 'users_cache';
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutos

interface CacheData {
  users: User[];
  timestamp: number;
}

const useUserStore = create<UserStore>((set, get) => ({
  users: [],
  filteredUsers: [],
  selectedUser: null,
  isLoading: false,
  error: null,
  searchQuery: '',
  currentPage: 0,
  hasMore: true,
  darkMode: false,

  fetchUsers: async () => {
    set({ isLoading: true, error: null });
    
    try {
      // Verificar caché primero
      const cachedData = await AsyncStorage.getItem(CACHE_KEY);
      const now = Date.now();
      
      if (cachedData) {
        const { users, timestamp }: CacheData = JSON.parse(cachedData);
        if (now - timestamp < CACHE_DURATION) {
          const paginatedUsers = users.slice(0, USERS_PER_PAGE);
          set({
            users: paginatedUsers,
            filteredUsers: paginatedUsers,
            isLoading: false,
            currentPage: 1,
            hasMore: users.length > USERS_PER_PAGE,
          });
          return;
        }
      }

      // Fetch desde API
      const allUsers = await apiService.getUsers();
      const paginatedUsers = allUsers.slice(0, USERS_PER_PAGE);
      
      // Guardar en caché
      await AsyncStorage.setItem(CACHE_KEY, JSON.stringify({
        users: allUsers,
        timestamp: now,
      }));

      set({
        users: paginatedUsers,
        filteredUsers: paginatedUsers,
        isLoading: false,
        currentPage: 1,
        hasMore: allUsers.length > USERS_PER_PAGE,
      });
    } catch (error) {
      set({
        isLoading: false,
        error: error instanceof Error ? error.message : 'Error desconocido',
      });
    }
  },

  loadMoreUsers: async () => {
    const { currentPage, users, isLoading } = get();
    
    if (isLoading) return;

    try {
      const cachedData = await AsyncStorage.getItem(CACHE_KEY);
      if (!cachedData) return;

      const { users: allUsers }: CacheData = JSON.parse(cachedData);
      const startIndex = currentPage * USERS_PER_PAGE;
      const endIndex = startIndex + USERS_PER_PAGE;
      const newUsers = allUsers.slice(startIndex, endIndex);

      if (newUsers.length > 0) {
        const updatedUsers = [...users, ...newUsers];
        set({
          users: updatedUsers,
          filteredUsers: get().searchQuery ? 
            updatedUsers.filter(user => 
              user.name.toLowerCase().includes(get().searchQuery.toLowerCase()) ||
              user.email.toLowerCase().includes(get().searchQuery.toLowerCase())
            ) : updatedUsers,
          currentPage: currentPage + 1,
          hasMore: endIndex < allUsers.length,
        });
      }
    } catch (error) {
      console.error('Error loading more users:', error);
    }
  },

  setSelectedUser: (user) => {
    set({ selectedUser: user });
  },

  setSearchQuery: (query) => {
    const { users } = get();
    const filtered = query
      ? users.filter(
          (user) =>
            user.name.toLowerCase().includes(query.toLowerCase()) ||
            user.email.toLowerCase().includes(query.toLowerCase())
        )
      : users;

    set({
      searchQuery: query,
      filteredUsers: filtered,
    });
  },

  toggleDarkMode: () => {
    set({ darkMode: !get().darkMode });
  },

  clearError: () => {
    set({ error: null });
  },

  retryFetch: async () => {
    await get().fetchUsers();
  },
}));

export default useUserStore;