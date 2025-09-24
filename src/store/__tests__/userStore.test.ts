import { renderHook, act } from '@testing-library/react-native';
import useUserStore from '../userStore';
import { apiService } from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Mock de las dependencias
jest.mock('../../services/api');
jest.mock('@react-native-async-storage/async-storage');

const mockedApiService = apiService as jest.Mocked<typeof apiService>;
const mockedAsyncStorage = AsyncStorage as jest.Mocked<typeof AsyncStorage>;

const mockUsers = [
  {
    id: 1,
    name: 'John Doe',
    username: 'johndoe',
    email: 'john@example.com',
    address: {
      street: '123 Main St',
      suite: 'Apt 1',
      city: 'New York',
      zipcode: '10001',
      geo: { lat: '40.7128', lng: '-74.0060' },
    },
    phone: '+1-234-567-8900',
    website: 'johndoe.com',
    company: {
      name: 'Doe Industries',
      catchPhrase: 'Innovation at its best',
      bs: 'synergistic solutions',
    },
  },
  {
    id: 2,
    name: 'Jane Smith',
    username: 'janesmith',
    email: 'jane@example.com',
    address: {
      street: '456 Oak Ave',
      suite: 'Suite 2',
      city: 'Los Angeles',
      zipcode: '90210',
      geo: { lat: '34.0522', lng: '-118.2437' },
    },
    phone: '+1-555-123-4567',
    website: 'janesmith.com',
    company: {
      name: 'Smith Corp',
      catchPhrase: 'Excellence in everything',
      bs: 'innovative technologies',
    },
  },
];

describe('useUserStore', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockedAsyncStorage.getItem.mockResolvedValue(null);
    mockedAsyncStorage.setItem.mockResolvedValue();
  });

  it('should fetch users successfully', async () => {
    mockedApiService.getUsers.mockResolvedValue(mockUsers);

    const { result } = renderHook(() => useUserStore());

    await act(async () => {
      await result.current.fetchUsers();
    });

    expect(result.current.users).toHaveLength(2);
    expect(result.current.filteredUsers).toHaveLength(2);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBe(null);
  });

  it('should handle search query correctly', async () => {
    mockedApiService.getUsers.mockResolvedValue(mockUsers);

    const { result } = renderHook(() => useUserStore());

    await act(async () => {
      await result.current.fetchUsers();
    });

    act(() => {
      result.current.setSearchQuery('john');
    });

    expect(result.current.filteredUsers).toHaveLength(1);
    expect(result.current.filteredUsers[0].name).toBe('John Doe');
  });

  it('should toggle dark mode', () => {
    const { result } = renderHook(() => useUserStore());

    expect(result.current.darkMode).toBe(false);

    act(() => {
      result.current.toggleDarkMode();
    });

    expect(result.current.darkMode).toBe(true);
  });

  it('should handle errors correctly', async () => {
    const errorMessage = 'Network error';
    mockedApiService.getUsers.mockRejectedValue(new Error(errorMessage));

    const { result } = renderHook(() => useUserStore());

    await act(async () => {
      await result.current.fetchUsers();
    });

    expect(result.current.error).toBe(errorMessage);
    expect(result.current.isLoading).toBe(false);
  });

  it('should clear error', async () => {
    const errorMessage = 'Network error';
    mockedApiService.getUsers.mockRejectedValue(new Error(errorMessage));

    const { result } = renderHook(() => useUserStore());

    await act(async () => {
      await result.current.fetchUsers();
    });

    expect(result.current.error).toBe(errorMessage);

    act(() => {
      result.current.clearError();
    });

    expect(result.current.error).toBe(null);
  });
});