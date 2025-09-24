import { MotiView } from 'moti';
import React from 'react';
import styled from 'styled-components/native';
import { darkTheme, lightTheme } from '../theme';

interface AvatarProps {
  name: string;
  size?: number;
  darkMode?: boolean;
}

const AvatarContainer = styled.View<{ size: number; darkMode?: boolean }>`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: ${props => props.size / 2}px;
  background-color: ${props => 
    props.darkMode ? darkTheme.colors.primary : lightTheme.colors.primary};
  justify-content: center;
  align-items: center;
  margin-right: ${lightTheme.spacing.md}px;
`;

const AvatarText = styled.Text<{ size: number; darkMode?: boolean }>`
  color: ${props => 
    props.darkMode ? darkTheme.colors.background : lightTheme.colors.background};
  font-size: ${props => props.size * 0.4}px;
  font-weight: bold;
`;

const getInitials = (name: string): string => {
  return name
    .split(' ')
    .map(word => word.charAt(0).toUpperCase())
    .join('')
    .substring(0, 2);
};

export const Avatar: React.FC<AvatarProps> = ({ 
  name, 
  size = 50, 
  darkMode = false 
}) => {
  return (
    <MotiView
      from={{
        scale: 0,
        rotate: '-180deg',
      }}
      animate={{
        scale: 1,
        rotate: '0deg',
      }}
      transition={{
        type: 'spring',
        damping: 15,
        stiffness: 150,
      }}
    >
      <AvatarContainer size={size} darkMode={darkMode}>
        <AvatarText size={size} darkMode={darkMode}>
          {getInitials(name)}
        </AvatarText>
      </AvatarContainer>
    </MotiView>
  );
};