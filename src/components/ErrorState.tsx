import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { MotiView } from 'moti';
import { lightTheme, darkTheme } from '../theme';

interface ErrorStateProps {
  message: string;
  onRetry?: () => void;
  darkMode?: boolean;
}

const ErrorContainer = styled.View<{ darkMode?: boolean }>`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: ${lightTheme.spacing.xl}px;
  background-color: ${props => 
    props.darkMode ? darkTheme.colors.background : lightTheme.colors.background};
`;

const ErrorTitle = styled.Text<{ darkMode?: boolean }>`
  font-size: ${lightTheme.fontSizes.xl}px;
  font-weight: bold;
  color: ${props => 
    props.darkMode ? darkTheme.colors.text : lightTheme.colors.text};
  text-align: center;
  margin-bottom: ${lightTheme.spacing.md}px;
`;

const ErrorMessage = styled.Text<{ darkMode?: boolean }>`
  font-size: ${lightTheme.fontSizes.md}px;
  color: ${props => 
    props.darkMode ? darkTheme.colors.textSecondary : lightTheme.colors.textSecondary};
  text-align: center;
  margin-bottom: ${lightTheme.spacing.xl}px;
`;

const RetryButton = styled(TouchableOpacity)<{ darkMode?: boolean }>`
  background-color: ${props => 
    props.darkMode ? darkTheme.colors.primary : lightTheme.colors.primary};
  padding: ${lightTheme.spacing.md}px ${lightTheme.spacing.xl}px;
  border-radius: ${lightTheme.borderRadius.lg}px;
`;

const RetryButtonText = styled.Text<{ darkMode?: boolean }>`
  color: ${props => 
    props.darkMode ? darkTheme.colors.background : lightTheme.colors.background};
  font-size: ${lightTheme.fontSizes.md}px;
  font-weight: bold;
`;

const ErrorIcon = styled.Text`
  font-size: 60px;
  margin-bottom: ${lightTheme.spacing.lg}px;
`;

export const ErrorState: React.FC<ErrorStateProps> = ({
  message,
  onRetry,
  darkMode = false,
}) => {
  return (
    <ErrorContainer darkMode={darkMode}>
      <MotiView
        from={{
          scale: 0,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          type: 'spring',
          damping: 15,
        }}
      >
        <ErrorIcon>😞</ErrorIcon>
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
          duration: 500,
          delay: 200,
        }}
      >
        <ErrorTitle darkMode={darkMode}>¡Oops! Algo salió mal</ErrorTitle>
        <ErrorMessage darkMode={darkMode}>{message}</ErrorMessage>
      </MotiView>

      {onRetry && (
        <MotiView
          from={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            type: 'spring',
            damping: 15,
            delay: 400,
          }}
        >
          <RetryButton onPress={onRetry} darkMode={darkMode} activeOpacity={0.8}>
            <RetryButtonText darkMode={darkMode}>Reintentar</RetryButtonText>
          </RetryButton>
        </MotiView>
      )}
    </ErrorContainer>
  );
};