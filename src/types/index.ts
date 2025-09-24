export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface UserStore {
  users: User[];
  filteredUsers: User[];
  selectedUser: User | null;
  isLoading: boolean;
  error: string | null;
  searchQuery: string;
  currentPage: number;
  hasMore: boolean;
  darkMode: boolean;
  fetchUsers: () => Promise<void>;
  setSelectedUser: (user: User | null) => void;
  setSearchQuery: (query: string) => void;
  loadMoreUsers: () => void;
  toggleDarkMode: () => void;
  clearError: () => void;
  retryFetch: () => Promise<void>;
}

export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;
    accent: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
    border: string;
    error: string;
    success: string;
    warning: string;
  };
  spacing: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
  };
  borderRadius: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  fontSizes: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
  };
}