import { MotiText, MotiView } from 'moti';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { darkTheme, lightTheme } from '../theme';
import { User } from '../types';
import { Avatar } from './Avatar';

interface UserCardProps {
  user: User;
  onPress: (user: User) => void;
  darkMode?: boolean;
  index?: number;
}

const CardContainer = styled(TouchableOpacity)<{ darkMode?: boolean }>`
  background-color: ${props => 
    props.darkMode ? darkTheme.colors.surface : lightTheme.colors.surface};
  margin: ${lightTheme.spacing.sm}px ${lightTheme.spacing.md}px;
  padding: ${lightTheme.spacing.md}px;
  border-radius: ${lightTheme.borderRadius.lg}px;
  flex-direction: row;
  align-items: center;
  shadow-color: ${props => 
    props.darkMode ? darkTheme.colors.accent : lightTheme.colors.accent};
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
  elevation: 3;
  border: 1px solid ${props => 
    props.darkMode ? darkTheme.colors.border : lightTheme.colors.border};
`;

const UserInfo = styled.View`
  flex: 1;
`;

const UserName = styled.Text<{ darkMode?: boolean }>`
  font-size: ${lightTheme.fontSizes.lg}px;
  font-weight: bold;
  color: ${props => 
    props.darkMode ? darkTheme.colors.text : lightTheme.colors.text};
  margin-bottom: ${lightTheme.spacing.xs}px;
`;

const UserEmail = styled.Text<{ darkMode?: boolean }>`
  font-size: ${lightTheme.fontSizes.sm}px;
  color: ${props => 
    props.darkMode ? darkTheme.colors.textSecondary : lightTheme.colors.textSecondary};
`;

export const UserCard: React.FC<UserCardProps> = ({
  user,
  onPress,
  darkMode = false,
  index = 0,
}) => {
  return (
    <MotiView
      from={{
        opacity: 0,
        translateX: -50,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        translateX: 0,
        scale: 1,
      }}
      transition={{
        type: 'spring',
        damping: 15,
        stiffness: 100,
        delay: index * 100,
      }}
    >
      <CardContainer
        darkMode={darkMode}
        onPress={() => onPress(user)}
        activeOpacity={0.7}
      >
        <Avatar name={user.name} darkMode={darkMode} />
        <UserInfo>
          <MotiText
            from={{ opacity: 0, translateY: 10 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ delay: (index * 100) + 200 }}
          >
            <UserName darkMode={darkMode}>{user.name}</UserName>
          </MotiText>
          <MotiText
            from={{ opacity: 0, translateY: 10 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ delay: (index * 100) + 300 }}
          >
            <UserEmail darkMode={darkMode}>{user.email}</UserEmail>
          </MotiText>
        </UserInfo>
      </CardContainer>
    </MotiView>
  );
};