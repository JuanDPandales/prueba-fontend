import { Theme } from '../types';

const lightTheme: Theme = {
  colors: {
    primary: '#618B4A',      // Verde principal
    secondary: '#AFBC88',    // Verde claro
    tertiary: '#D7F9F1',     // Verde menta muy claro
    accent: '#40531B',       // Verde oscuro
    background: '#FFFFFF',
    surface: '#F8F9FA',
    text: '#212529',
    textSecondary: '#6C757D',
    border: '#DEE2E6',
    error: '#DC3545',
    success: '#28A745',
    warning: '#FFC107',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 24,
    xxl: 32,
  },
};

const darkTheme: Theme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    background: '#121212',
    surface: '#1E1E1E',
    text: '#FFFFFF',
    textSecondary: '#B3B3B3',
    border: '#333333',
  },
};

export { lightTheme, darkTheme };