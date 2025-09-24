import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import { UserCard } from '../components/UserCard';
import { User } from '../types';

const mockUser: User = {
  id: 1,
  name: 'John Doe',
  username: 'johndoe',
  email: 'john@example.com',
  address: {
    street: '123 Main St',
    suite: 'Apt 1',
    city: 'New York',
    zipcode: '10001',
    geo: {
      lat: '40.7128',
      lng: '-74.0060',
    },
  },
  phone: '+1-234-567-8900',
  website: 'johndoe.com',
  company: {
    name: 'Doe Industries',
    catchPhrase: 'Innovation at its best',
    bs: 'synergistic solutions',
  },
};

describe('UserCard', () => {
  const mockOnPress = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders user information correctly', () => {
    const { getByText } = render(
      <UserCard user={mockUser} onPress={mockOnPress} />
    );

    expect(getByText('John Doe')).toBeTruthy();
    expect(getByText('john@example.com')).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const { getByText } = render(
      <UserCard user={mockUser} onPress={mockOnPress} />
    );

    fireEvent.press(getByText('John Doe'));
    expect(mockOnPress).toHaveBeenCalledWith(mockUser);
  });

  it('renders in dark mode correctly', () => {
    const { getByText } = render(
      <UserCard user={mockUser} onPress={mockOnPress} darkMode={true} />
    );

    expect(getByText('John Doe')).toBeTruthy();
  });
});