import { CustomTheme as Theme } from '../../../../types';
import { ButtonVariant, ButtonColor } from '../constants';

const getOutlinedButtonStyles = (theme: Theme) => ({
  primary: `
    color: ${theme.palette.primary};
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.palette.primary};
    &:hover {
      color: ${theme.palette.primaryDark_300};
      background-color: ${theme.colors.white};
      border: 1px solid ${theme.palette.primaryDark_300};
    }
    &:active {
      color: ${theme.palette.primaryDark_300};
      background-color: ${theme.colors.white};
      border: 1px solid ${theme.palette.primaryDark_300};
    }
    &:disabled {
      cursor: not-allowed;
      color: ${theme.palette.primaryLight_300};
      background-color: ${theme.colors.white};
      border: 1px solid ${theme.palette.primaryLight_300};
    }
  `,
  error: {
    enabled: {},
    hover: {},
    active: {},
    disabled: {},
  },
  neutral: `
    color: ${theme.palette.neutralDark_400};
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.palette.neutralDark_100};
    &:hover {
      color: ${theme.palette.neutralDark_700};
      background-color: ${theme.colors.white};
      border: 1px solid ${theme.palette.neutralDark_200};
    }
    &:active {
      color: ${theme.palette.neutralDark_700};
      background-color: ${theme.colors.white};
      border: 1px solid ${theme.palette.neutralDark_200};
    }
    &:disabled {
      cursor: not-allowed;
      color: ${theme.palette.neutralDark_100};
      background-color: ${theme.colors.white};
      border: 1px solid ${theme.palette.neutralDark_100};
    }
  `,
});

export const buttonVariantStyles = (
  variant: ButtonVariant,
  theme: Theme,
  color: ButtonColor
) => {
  return {
    solid: `
      border: ${theme.spacing.none};
      color: ${theme.colors.white};
      background-color: ${theme.palette[color]};
      
      &:hover {
        color: ${theme.colors.white};
        background-color: ${theme.palette[`${color}Dark_300`]};
      }

      &:disabled {
        cursor: not-allowed;
        opacity: 38%;
      }
    `,
    outlined: getOutlinedButtonStyles(theme)[color],
    text: `
      border: none;
      color: ${theme.palette[color]};
      background-color: 'transparent';
      
      &:hover {
        color: ${theme.palette[`${color}Dark_300`]};
        background-color: 'transparent';
      }
      
      &:disabled {
        cursor: not-allowed;
        color: ${theme.palette.neutralLight_100};
      }
    `,
  }[variant];
};
