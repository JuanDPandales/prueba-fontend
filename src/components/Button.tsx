import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';
import { MotiView, MotiText } from 'moti';
import { useTheme } from '../hooks';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  loading?: boolean;
  leftIcon?: string;
  rightIcon?: string;
}

const StyledButton = styled(TouchableOpacity)<{
  variant: string;
  size: string;
  theme: any;
}>`
  padding: ${props => 
    props.size === 'small' ? `${props.theme.spacing.sm}px ${props.theme.spacing.md}px` :
    props.size === 'large' ? `${props.theme.spacing.lg}px ${props.theme.spacing.xl}px` :
    `${props.theme.spacing.md}px ${props.theme.spacing.lg}px`
  };
  border-radius: ${props => props.theme.borderRadius.lg}px;
  background-color: ${props => 
    props.variant === 'primary' ? props.theme.colors.primary :
    props.variant === 'secondary' ? props.theme.colors.secondary :
    'transparent'
  };
  border-width: ${props => props.variant === 'outline' ? '1px' : '0px'};
  border-color: ${props => props.theme.colors.primary};
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const ButtonText = styled.Text<{
  variant: string;
  size: string;
  theme: any;
}>`
  color: ${props => 
    props.variant === 'outline' ? props.theme.colors.primary :
    props.variant === 'secondary' ? props.theme.colors.accent :
    props.theme.colors.background
  };
  font-size: ${props => 
    props.size === 'small' ? props.theme.fontSizes.sm :
    props.size === 'large' ? props.theme.fontSizes.lg :
    props.theme.fontSizes.md
  }px;
  font-weight: bold;
`;

const IconText = styled.Text<{ theme: any; variant: string }>`
  font-size: ${props => props.theme.fontSizes.md}px;
  color: ${props => 
    props.variant === 'outline' ? props.theme.colors.primary :
    props.variant === 'secondary' ? props.theme.colors.accent :
    props.theme.colors.background
  };
`;

export const Button: React.FC<ButtonProps> = ({
  title,
  variant = 'primary',
  size = 'medium',
  loading = false,
  leftIcon,
  rightIcon,
  disabled,
  onPress,
  ...props
}) => {
  const { theme } = useTheme();

  const handlePress = (event: any) => {
    if (!loading && !disabled && onPress) {
      onPress(event);
    }
  };

  return (
    <MotiView
      animate={{
        scale: loading || disabled ? 0.95 : 1,
        opacity: loading || disabled ? 0.7 : 1,
      }}
      transition={{
        type: 'timing',
        duration: 200,
      }}
    >
      <StyledButton
        variant={variant}
        size={size}
        theme={theme}
        onPress={handlePress}
        disabled={loading || disabled}
        activeOpacity={0.8}
        {...props}
      >
        {leftIcon && (
          <MotiView
            from={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 100 }}
            style={{ marginRight: theme.spacing.sm }}
          >
            <IconText theme={theme} variant={variant}>
              {leftIcon}
            </IconText>
          </MotiView>
        )}

        <MotiText
          from={{ opacity: 0, translateY: 10 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ delay: 150 }}
        >
          <ButtonText variant={variant} size={size} theme={theme}>
            {loading ? 'Cargando...' : title}
          </ButtonText>
        </MotiText>

        {rightIcon && (
          <MotiView
            from={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 200 }}
            style={{ marginLeft: theme.spacing.sm }}
          >
            <IconText theme={theme} variant={variant}>
              {rightIcon}
            </IconText>
          </MotiView>
        )}
      </StyledButton>
    </MotiView>
  );
};