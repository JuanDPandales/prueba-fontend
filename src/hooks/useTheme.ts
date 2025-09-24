import { useMemo } from 'react';
import useUserStore from '../store/userStore';
import { lightTheme, darkTheme } from '../theme';

export const useTheme = () => {
  const { darkMode } = useUserStore();
  
  const theme = useMemo(() => {
    return darkMode ? darkTheme : lightTheme;
  }, [darkMode]);

  return {
    theme,
    darkMode,
    colors: theme.colors,
    spacing: theme.spacing,
    borderRadius: theme.borderRadius,
    fontSizes: theme.fontSizes,
  };
};

export default useTheme;