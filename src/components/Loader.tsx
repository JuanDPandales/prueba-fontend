import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';
import { MotiView } from 'moti';
import { lightTheme, darkTheme } from '../theme';

interface LoaderProps {
  size?: 'small' | 'large';
  darkMode?: boolean;
}

const LoaderContainer = styled.View<{ darkMode?: boolean }>`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${props => 
    props.darkMode ? darkTheme.colors.background : lightTheme.colors.background};
`;

const LoaderText = styled.Text<{ darkMode?: boolean }>`
  margin-top: ${lightTheme.spacing.md}px;
  font-size: ${lightTheme.fontSizes.md}px;
  color: ${props => 
    props.darkMode ? darkTheme.colors.text : lightTheme.colors.text};
`;

export const Loader: React.FC<LoaderProps> = ({ 
  size = 'large', 
  darkMode = false 
}) => {
  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <LoaderContainer darkMode={darkMode}>
      <MotiView
        from={{
          scale: 0.5,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          type: 'timing',
          duration: 500,
          loop: true,
        }}
      >
        <ActivityIndicator 
          size={size} 
          color={theme.colors.primary}
        />
      </MotiView>
      <MotiView
        from={{
          opacity: 0,
          translateY: 20,
        }}
        animate={{
          opacity: 1,
          translateY: 0,
        }}
        transition={{
          type: 'timing',
          duration: 800,
          delay: 300,
        }}
      >
        <LoaderText darkMode={darkMode}>Cargando...</LoaderText>
      </MotiView>
    </LoaderContainer>
  );
};