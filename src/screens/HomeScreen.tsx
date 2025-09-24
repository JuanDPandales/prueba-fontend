import React, { useEffect } from 'react';
import {
  FlatList,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import styled from 'styled-components/native';
import { MotiView } from 'moti';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Loader, SearchBar, UserCard, ErrorState } from '../components';
import useUserStore from '../store/userStore';
import { lightTheme, darkTheme } from '../theme';
import { User } from '../types';

type RootStackParamList = {
  Home: undefined;
  UserDetail: { user: User };
};

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

const Container = styled(SafeAreaView)<{ darkMode?: boolean }>`
  flex: 1;
  background-color: ${props => 
    props.darkMode ? darkTheme.colors.background : lightTheme.colors.background};
`;

const Header = styled.View<{ darkMode?: boolean }>`
  padding: ${lightTheme.spacing.md}px;
  background-color: ${props => 
    props.darkMode ? darkTheme.colors.surface : lightTheme.colors.surface};
  border-bottom-width: 1px;
  border-bottom-color: ${props => 
    props.darkMode ? darkTheme.colors.border : lightTheme.colors.border};
`;

const HeaderTitle = styled.Text<{ darkMode?: boolean }>`
  font-size: ${lightTheme.fontSizes.xl}px;
  font-weight: bold;
  color: ${props => 
    props.darkMode ? darkTheme.colors.text : lightTheme.colors.text};
  text-align: center;
`;

const ThemeToggle = styled(TouchableOpacity)<{ darkMode?: boolean }>`
  position: absolute;
  right: ${lightTheme.spacing.md}px;
  top: ${lightTheme.spacing.md}px;
  padding: ${lightTheme.spacing.sm}px;
  background-color: ${props => 
    props.darkMode ? darkTheme.colors.primary : lightTheme.colors.primary};
  border-radius: ${lightTheme.borderRadius.md}px;
`;

const ThemeToggleText = styled.Text<{ darkMode?: boolean }>`
  color: ${props => 
    props.darkMode ? darkTheme.colors.background : lightTheme.colors.background};
  font-size: ${lightTheme.fontSizes.sm}px;
`;

const LoadMoreButton = styled(TouchableOpacity)<{ darkMode?: boolean }>`
  margin: ${lightTheme.spacing.md}px;
  padding: ${lightTheme.spacing.md}px;
  background-color: ${props => 
    props.darkMode ? darkTheme.colors.secondary : lightTheme.colors.secondary};
  border-radius: ${lightTheme.borderRadius.lg}px;
  align-items: center;
`;

const LoadMoreText = styled.Text<{ darkMode?: boolean }>`
  color: ${props => 
    props.darkMode ? darkTheme.colors.text : lightTheme.colors.accent};
  font-size: ${lightTheme.fontSizes.md}px;
  font-weight: bold;
`;

const EmptyState = styled.View<{ darkMode?: boolean }>`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: ${lightTheme.spacing.xl}px;
`;

const EmptyStateText = styled.Text<{ darkMode?: boolean }>`
  font-size: ${lightTheme.fontSizes.lg}px;
  color: ${props => 
    props.darkMode ? darkTheme.colors.textSecondary : lightTheme.colors.textSecondary};
  text-align: center;
`;

export const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const {
    filteredUsers,
    isLoading,
    error,
    searchQuery,
    hasMore,
    darkMode,
    fetchUsers,
    setSelectedUser,
    setSearchQuery,
    loadMoreUsers,
    toggleDarkMode,
    clearError,
    retryFetch,
  } = useUserStore();

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleUserPress = (user: User) => {
    setSelectedUser(user);
    navigation.navigate('UserDetail', { user });
  };

  const renderUserCard = ({ item, index }: { item: User; index: number }) => (
    <UserCard
      user={item}
      onPress={handleUserPress}
      darkMode={darkMode}
      index={index}
    />
  );

  const renderFooter = () => {
    if (!hasMore || isLoading) return null;

    return (
      <MotiView
        from={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', damping: 15 }}
      >
        <LoadMoreButton onPress={loadMoreUsers} darkMode={darkMode}>
          <LoadMoreText darkMode={darkMode}>Cargar más usuarios</LoadMoreText>
        </LoadMoreButton>
      </MotiView>
    );
  };

  const renderEmptyState = () => (
    <MotiView
      from={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', damping: 15 }}
    >
      <EmptyState darkMode={darkMode}>
        <Text style={{ fontSize: 60, marginBottom: lightTheme.spacing.md }}>
          🔍
        </Text>
        <EmptyStateText darkMode={darkMode}>
          {searchQuery
            ? `No se encontraron usuarios que coincidan con "${searchQuery}"`
            : 'No hay usuarios disponibles'}
        </EmptyStateText>
      </EmptyState>
    </MotiView>
  );

  if (error) {
    return (
      <Container darkMode={darkMode}>
        <StatusBar
          barStyle={darkMode ? 'light-content' : 'dark-content'}
          backgroundColor={
            darkMode ? darkTheme.colors.background : lightTheme.colors.background
          }
        />
        <ErrorState
          message={error}
          onRetry={retryFetch}
          darkMode={darkMode}
        />
      </Container>
    );
  }

  if (isLoading && filteredUsers.length === 0) {
    return (
      <Container darkMode={darkMode}>
        <StatusBar
          barStyle={darkMode ? 'light-content' : 'dark-content'}
          backgroundColor={
            darkMode ? darkTheme.colors.background : lightTheme.colors.background
          }
        />
        <Loader darkMode={darkMode} />
      </Container>
    );
  }

  return (
    <Container darkMode={darkMode}>
      <StatusBar
        barStyle={darkMode ? 'light-content' : 'dark-content'}
        backgroundColor={
          darkMode ? darkTheme.colors.background : lightTheme.colors.background
        }
      />
      <Header darkMode={darkMode}>
        <HeaderTitle darkMode={darkMode}>Usuarios</HeaderTitle>
        <ThemeToggle onPress={toggleDarkMode} darkMode={darkMode}>
          <ThemeToggleText darkMode={darkMode}>
            {darkMode ? '☀️' : '🌙'}
          </ThemeToggleText>
        </ThemeToggle>
      </Header>

      <SearchBar
        value={searchQuery}
        onChangeText={setSearchQuery}
        darkMode={darkMode}
      />

      <FlatList
        data={filteredUsers}
        renderItem={renderUserCard}
        keyExtractor={(item) => item.id.toString()}
        ListFooterComponent={renderFooter}
        ListEmptyComponent={renderEmptyState}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: lightTheme.spacing.md,
        }}
      />
    </Container>
  );
};