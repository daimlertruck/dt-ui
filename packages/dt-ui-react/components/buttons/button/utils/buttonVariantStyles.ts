import { Theme } from '@dt-ui/react-core';

import { ButtonVariant, ButtonColor } from '../constants';

const getOutlinedButtonStyles = (
  theme: Theme
): Record<ButtonColor, string> => ({
  primary: `
    color: ${theme.palette.primary.default};
    background-color: ${theme.palette.primary.contrast};
    border: 1px solid ${theme.palette.primary.default};
    &:hover {
      color: ${theme.palette.primary.dark};
      border: 1px solid ${theme.palette.primary.dark};
    }
    &:active {
      color: ${theme.palette.primary.dark};
      border: 1px solid ${theme.palette.primary.dark};
    }
    &:disabled {
      cursor: not-allowed;
      color: ${theme.palette.primary.medium};
      border: 1px solid ${theme.palette.primary.medium};
    }
  `,
  error: `
    color: ${theme.palette.error.default};
    background-color: ${theme.palette.error.contrast};
    border: 1px solid ${theme.palette.error.default};
    &:hover {
      color: ${theme.palette.error.dark};
      border: 1px solid ${theme.palette.error.dark};
    }
    &:active {
      color: ${theme.palette.error.dark};
      border: 1px solid ${theme.palette.error.dark};
    }
    &:disabled {
      cursor: not-allowed;
      color: ${theme.palette.error.medium};
      border: 1px solid ${theme.palette.error.medium};
    }
  `,
  secondary: `
    color: ${theme.palette.secondary.default};
    background-color: ${theme.palette.secondary.contrast};
    border: 1px solid ${theme.palette.secondary.default};
    &:hover {
      color: ${theme.palette.secondary.dark};
      border: 1px solid ${theme.palette.secondary.dark};
    }
    &:active {
      color: ${theme.palette.secondary.dark};
      border: 1px solid ${theme.palette.secondary.dark};
    }
    &:disabled {
      cursor: not-allowed;
      color: ${theme.palette.secondary.medium};
      border: 1px solid ${theme.palette.secondary.medium};
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
      color: ${theme.palette[color].contrast};
      background-color: ${theme.palette[color].default};
      
      &:hover {
        color: ${theme.palette[color].contrast};
        background-color: ${theme.palette[color].dark};
      }

      &:disabled {
        cursor: not-allowed;
        opacity: 38%;
      }
    `,
    outlined: getOutlinedButtonStyles(theme)[color],
    text: `
      border: none;
      color: ${theme.palette[color].default};
      background-color: transparent;
      
      &:hover {
        color: ${theme.palette[color].dark};
        background-color: transparent;
      }
      
      &:disabled {
        cursor: not-allowed;
        color: ${theme.palette[color].medium};
      }
    `,
  }[variant];
};
