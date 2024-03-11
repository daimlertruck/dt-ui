import { Theme } from '@dt-ui/react-core';

import { ButtonVariant, ButtonColor, ButtonAppearance } from '../constants';

const getOutlinedButtonStyles = (
  theme: Theme
): Record<ButtonColor, string> => ({
  primary: `
    color: ${theme.palette.primary.default};
    border-color: ${theme.palette.primary.default};
    background-color: transparent;

    &:hover {
      color: ${theme.palette.primary.dark};
      border-color: ${theme.palette.primary.dark};
    }

    &:active {
      color: ${theme.palette.primary.dark};
      border-color: ${theme.palette.primary.dark};
    }

    &:disabled {
      cursor: not-allowed;
      color: ${theme.palette.primary.medium};
      border-color: ${theme.palette.primary.medium};
    }
  `,
  error: `
    color: ${theme.palette.error.default};
    background-color: transparent;
    border-color: ${theme.palette.error.default};

    &:hover {
      color: ${theme.palette.error.dark};
      border-color: ${theme.palette.error.dark};
    }

    &:disabled {
      cursor: not-allowed;
      color: ${theme.palette.error.medium};
      border-color: ${theme.palette.error.medium};
    }
  `,
  secondary: `
    color: ${theme.palette.secondary.default};
    border-color: ${theme.palette.secondary.default};
    background-color: transparent;
    
    &:hover {
      color: ${theme.palette.secondary.dark};
      border-color: ${theme.palette.secondary.dark};
    }
    &:active {
      color: ${theme.palette.secondary.dark};
      border-color: ${theme.palette.secondary.dark};
    }
    &:disabled {
      cursor: not-allowed;
      color: ${theme.palette.secondary.medium};
      border-color: ${theme.palette.secondary.medium};
    }
  `,
});

export const buttonVariantStyles = (
  variant: ButtonVariant,
  theme: Theme,
  color: ButtonAppearance
) => {
  if (color === 'contrast') {
    return {
      solid: `
        color: ${theme.palette.content.heading};
        background-color: ${theme.palette.base.default};
        border-color: ${theme.palette.border.contrast};

        &:hover {
          background-color: ${theme.palette.primary.medium};
          border-color: ${theme.palette.primary.medium};
        }

        &:disabled {
          cursor: not-allowed;
          color: ${theme.palette.content.disabled};
          border-color: ${theme.palette.base.default};
          background-color: ${theme.palette.base.default};
        }
      `,
      outlined: `    
        color: ${theme.palette.content.contrast};
        border-color: ${theme.palette.border.contrast};
        background-color: transparent;

        &:hover {
          color: ${theme.palette.primary.medium};
          border-color: ${theme.palette.primary.medium};
        }

        &:disabled {
          cursor: not-allowed;
          color: ${theme.palette.content.disabled};
          border-color: ${theme.palette.border.default};
        }
      `,
      text: `
        color: ${theme.palette.primary.contrast};
        background-color: transparent;
        
        &:hover {
          color: ${theme.palette.primary.medium};
        }
        
        &:disabled {
          cursor: not-allowed;
          color: ${theme.palette.content.disabled};
        }
      `,
    }[variant];
  } else {
    return {
      solid: `
        border-color: ${theme.palette[color].default};
        color: ${theme.palette[color].contrast};
        background-color: ${theme.palette[color].default};
        
        &:hover {
          color: ${theme.palette[color].contrast};
          background-color: ${theme.palette[color].dark};
          border-color: ${theme.palette[color].dark};
        }

        &:disabled {
          cursor: not-allowed;
          color: ${theme.palette[color].contrast};
          background-color: ${theme.palette[color].medium};
          border-color: ${theme.palette[color].medium};
        }
    `,
      outlined: getOutlinedButtonStyles(theme)[color],
      text: `
        color: ${theme.palette[color].default};
        background-color: transparent;
        
        &:hover {
          color: ${theme.palette[color].dark};
        }
        
        &:disabled {
          cursor: not-allowed;
          color: ${theme.palette[color].medium};
        }
    `,
    }[variant];
  }
};
