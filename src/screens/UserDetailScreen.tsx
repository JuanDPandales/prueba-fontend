import React from 'react';
import {
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Linking,
} from 'react-native';
import styled from 'styled-components/native';
import { MotiView } from 'moti';
import { useNavigation, useRoute } from '@react-navigation/native';
import type { RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Avatar } from '../components';
import useUserStore from '../store/userStore';
import { lightTheme, darkTheme } from '../theme';
import { User } from '../types';

type RootStackParamList = {
  Home: undefined;
  UserDetail: { user: User };
};

type UserDetailScreenRouteProp = RouteProp<RootStackParamList, 'UserDetail'>;
type UserDetailScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'UserDetail'
>;

const Container = styled(SafeAreaView)<{ darkMode?: boolean }>`
  flex: 1;
  background-color: ${props => 
    props.darkMode ? darkTheme.colors.background : lightTheme.colors.background};
`;

const Header = styled.View<{ darkMode?: boolean }>`
  flex-direction: row;
  align-items: center;
  padding: ${lightTheme.spacing.md}px;
  background-color: ${props => 
    props.darkMode ? darkTheme.colors.surface : lightTheme.colors.surface};
  border-bottom-width: 1px;
  border-bottom-color: ${props => 
    props.darkMode ? darkTheme.colors.border : lightTheme.colors.border};
`;

const BackButton = styled(TouchableOpacity)<{ darkMode?: boolean }>`
  background-color: ${props => 
    props.darkMode ? darkTheme.colors.primary : lightTheme.colors.primary};
  padding: ${lightTheme.spacing.sm}px ${lightTheme.spacing.md}px;
  border-radius: ${lightTheme.borderRadius.md}px;
  margin-right: ${lightTheme.spacing.md}px;
`;

const BackButtonText = styled.Text<{ darkMode?: boolean }>`
  color: ${props => 
    props.darkMode ? darkTheme.colors.background : lightTheme.colors.background};
  font-size: ${lightTheme.fontSizes.md}px;
  font-weight: bold;
`;

const HeaderTitle = styled.Text<{ darkMode?: boolean }>`
  flex: 1;
  font-size: ${lightTheme.fontSizes.lg}px;
  font-weight: bold;
  color: ${props => 
    props.darkMode ? darkTheme.colors.text : lightTheme.colors.text};
`;

const ProfileSection = styled.View`
  align-items: center;
  padding: ${lightTheme.spacing.xl}px;
`;

const UserName = styled.Text<{ darkMode?: boolean }>`
  font-size: ${lightTheme.fontSizes.xxl}px;
  font-weight: bold;
  color: ${props => 
    props.darkMode ? darkTheme.colors.text : lightTheme.colors.text};
  margin-top: ${lightTheme.spacing.md}px;
  text-align: center;
`;

const Username = styled.Text<{ darkMode?: boolean }>`
  font-size: ${lightTheme.fontSizes.lg}px;
  color: ${props => 
    props.darkMode ? darkTheme.colors.textSecondary : lightTheme.colors.textSecondary};
  margin-top: ${lightTheme.spacing.xs}px;
`;

const DetailCard = styled.View<{ darkMode?: boolean }>`
  background-color: ${props => 
    props.darkMode ? darkTheme.colors.surface : lightTheme.colors.surface};
  margin: ${lightTheme.spacing.sm}px ${lightTheme.spacing.md}px;
  padding: ${lightTheme.spacing.md}px;
  border-radius: ${lightTheme.borderRadius.lg}px;
  border: 1px solid ${props => 
    props.darkMode ? darkTheme.colors.border : lightTheme.colors.border};
  shadow-color: ${props => 
    props.darkMode ? darkTheme.colors.accent : lightTheme.colors.accent};
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
  elevation: 2;
`;

const DetailTitle = styled.Text<{ darkMode?: boolean }>`
  font-size: ${lightTheme.fontSizes.lg}px;
  font-weight: bold;
  color: ${props => 
    props.darkMode ? darkTheme.colors.primary : lightTheme.colors.primary};
  margin-bottom: ${lightTheme.spacing.md}px;
`;

const DetailRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: ${lightTheme.spacing.sm}px;
`;

const DetailIcon = styled.Text`
  font-size: ${lightTheme.fontSizes.lg}px;
  width: 30px;
`;

const DetailText = styled.Text<{ darkMode?: boolean }>`
  flex: 1;
  font-size: ${lightTheme.fontSizes.md}px;
  color: ${props => 
    props.darkMode ? darkTheme.colors.text : lightTheme.colors.text};
  margin-left: ${lightTheme.spacing.sm}px;
`;

const LinkText = styled(DetailText)<{ darkMode?: boolean }>`
  color: ${props => 
    props.darkMode ? darkTheme.colors.secondary : lightTheme.colors.primary};
  text-decoration-line: underline;
`;

export const UserDetailScreen: React.FC = () => {
  const navigation = useNavigation<UserDetailScreenNavigationProp>();
  const route = useRoute<UserDetailScreenRouteProp>();
  const { darkMode } = useUserStore();
  
  const { user } = route.params;

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleWebsitePress = (website: string) => {
    const url = website.startsWith('http') ? website : `https://${website}`;
    Linking.openURL(url);
  };

  const handlePhonePress = (phone: string) => {
    Linking.openURL(`tel:${phone}`);
  };

  const handleEmailPress = (email: string) => {
    Linking.openURL(`mailto:${email}`);
  };

  return (
    <Container darkMode={darkMode}>
      <StatusBar
        barStyle={darkMode ? 'light-content' : 'dark-content'}
        backgroundColor={
          darkMode ? darkTheme.colors.background : lightTheme.colors.background
        }
      />
      
      <Header darkMode={darkMode}>
        <BackButton onPress={handleBackPress} darkMode={darkMode}>
          <BackButtonText darkMode={darkMode}>← Volver</BackButtonText>
        </BackButton>
        <HeaderTitle darkMode={darkMode}>Detalles</HeaderTitle>
      </Header>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: lightTheme.spacing.xl }}
      >
        <MotiView
          from={{
            opacity: 0,
            translateY: -50,
          }}
          animate={{
            opacity: 1,
            translateY: 0,
          }}
          transition={{
            type: 'spring',
            damping: 15,
          }}
        >
          <ProfileSection>
            <Avatar name={user.name} size={120} darkMode={darkMode} />
            <UserName darkMode={darkMode}>{user.name}</UserName>
            <Username darkMode={darkMode}>@{user.username}</Username>
          </ProfileSection>
        </MotiView>

        <MotiView
          from={{
            opacity: 0,
            translateX: -50,
          }}
          animate={{
            opacity: 1,
            translateX: 0,
          }}
          transition={{
            type: 'spring',
            damping: 15,
            delay: 200,
          }}
        >
          <DetailCard darkMode={darkMode}>
            <DetailTitle darkMode={darkMode}>📧 Contacto</DetailTitle>
            
            <DetailRow>
              <DetailIcon>📧</DetailIcon>
              <TouchableOpacity onPress={() => handleEmailPress(user.email)}>
                <LinkText darkMode={darkMode}>{user.email}</LinkText>
              </TouchableOpacity>
            </DetailRow>
            
            <DetailRow>
              <DetailIcon>📱</DetailIcon>
              <TouchableOpacity onPress={() => handlePhonePress(user.phone)}>
                <LinkText darkMode={darkMode}>{user.phone}</LinkText>
              </TouchableOpacity>
            </DetailRow>
            
            <DetailRow>
              <DetailIcon>🌐</DetailIcon>
              <TouchableOpacity onPress={() => handleWebsitePress(user.website)}>
                <LinkText darkMode={darkMode}>{user.website}</LinkText>
              </TouchableOpacity>
            </DetailRow>
          </DetailCard>
        </MotiView>

        <MotiView
          from={{
            opacity: 0,
            translateX: 50,
          }}
          animate={{
            opacity: 1,
            translateX: 0,
          }}
          transition={{
            type: 'spring',
            damping: 15,
            delay: 400,
          }}
        >
          <DetailCard darkMode={darkMode}>
            <DetailTitle darkMode={darkMode}>📍 Dirección</DetailTitle>
            
            <DetailRow>
              <DetailIcon>🏠</DetailIcon>
              <DetailText darkMode={darkMode}>
                {user.address.street}, {user.address.suite}
              </DetailText>
            </DetailRow>
            
            <DetailRow>
              <DetailIcon>🏙️</DetailIcon>
              <DetailText darkMode={darkMode}>
                {user.address.city}, {user.address.zipcode}
              </DetailText>
            </DetailRow>
            
            <DetailRow>
              <DetailIcon>🗺️</DetailIcon>
              <DetailText darkMode={darkMode}>
                Lat: {user.address.geo.lat}, Lng: {user.address.geo.lng}
              </DetailText>
            </DetailRow>
          </DetailCard>
        </MotiView>

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
            delay: 600,
          }}
        >
          <DetailCard darkMode={darkMode}>
            <DetailTitle darkMode={darkMode}>🏢 Empresa</DetailTitle>
            
            <DetailRow>
              <DetailIcon>🏢</DetailIcon>
              <DetailText darkMode={darkMode}>{user.company.name}</DetailText>
            </DetailRow>
            
            <DetailRow>
              <DetailIcon>💡</DetailIcon>
              <DetailText darkMode={darkMode}>"{user.company.catchPhrase}"</DetailText>
            </DetailRow>
            
            <DetailRow>
              <DetailIcon>📊</DetailIcon>
              <DetailText darkMode={darkMode}>{user.company.bs}</DetailText>
            </DetailRow>
          </DetailCard>
        </MotiView>
      </ScrollView>
    </Container>
  );
};