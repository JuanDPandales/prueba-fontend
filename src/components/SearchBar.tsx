import React from 'react';
import { TextInput, View } from 'react-native';
import styled from 'styled-components/native';
import { MotiView } from 'moti';
import { lightTheme, darkTheme } from '../theme';

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  darkMode?: boolean;
}

const SearchContainer = styled.View<{ darkMode?: boolean }>`
  margin: ${lightTheme.spacing.md}px;
  padding: ${lightTheme.spacing.sm}px;
  background-color: ${props => 
    props.darkMode ? darkTheme.colors.surface : lightTheme.colors.surface};
  border-radius: ${lightTheme.borderRadius.lg}px;
  border: 1px solid ${props => 
    props.darkMode ? darkTheme.colors.border : lightTheme.colors.border};
`;

const SearchInput = styled.TextInput<{ darkMode?: boolean }>`
  font-size: ${lightTheme.fontSizes.md}px;
  padding: ${lightTheme.spacing.sm}px;
  color: ${props => 
    props.darkMode ? darkTheme.colors.text : lightTheme.colors.text};
`;

export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChangeText,
  placeholder = 'Buscar por nombre o email...',
  darkMode = false,
}) => {
  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <MotiView
      from={{
        opacity: 0,
        translateY: -20,
      }}
      animate={{
        opacity: 1,
        translateY: 0,
      }}
      transition={{
        type: 'timing',
        duration: 500,
      }}
    >
      <SearchContainer darkMode={darkMode}>
        <SearchInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={theme.colors.textSecondary}
          darkMode={darkMode}
        />
      </SearchContainer>
    </MotiView>
  );
};