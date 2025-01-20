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
      color: ${theme.palette.primary.default};
      border-color: ${theme.palette.primary.default};
      background-color: ${theme.palette.primary.light};
    }

    &:active {
      color: ${theme.palette.primary.default};
      border-color: ${theme.palette.primary.default};
    }

    &:disabled {
      cursor: not-allowed;
      color: ${theme.palette.primary.light};
      border-color: ${theme.palette.primary.light};
      background-color: transparent;
    }
  `,
  error: `
    color: ${theme.palette.error.default};
    background-color: transparent;
    border-color: ${theme.palette.error.default};

    &:hover {
      color: ${theme.palette.error.default};
      border-color: ${theme.palette.error.default};
      background-color: ${theme.palette.error.light};
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
      color: ${theme.palette.secondary.default};
      border-color: ${theme.palette.secondary.default};
      background-color: ${theme.palette.secondary.light};
    }
    &:active {
      color: ${theme.palette.secondary.default};
      border-color: ${theme.palette.secondary.default};
      background-color: ${theme.palette.secondary.light};
    }
    &:disabled {
      cursor: not-allowed;
      color: ${theme.palette.secondary.medium};
      border-color: ${theme.palette.secondary.medium};
      background-color: transparent;
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
        color: ${theme.palette.content.dark};
        background-color: ${theme.palette.surface.default};
        border-color: ${theme.palette.border.contrast};

        &:hover {
          background-color: ${theme.palette.primary.light};
          border-color: ${theme.palette.primary.light};
        }

        &:disabled {
          cursor: not-allowed;
          color: ${theme.palette.content.default};
          border-color: ${theme.palette.content.dark};
          background-color: ${theme.palette.content.dark};
        }
      `,
      outlined: `
        color: ${theme.palette.primary.contrast};
        border-color: ${theme.palette.primary.contrast};
        background-color: transparent;

        &:hover {
          color: ${theme.palette.surface.contrast};
          border-color: ${theme.palette.surface.contrast};
          background-color: ${theme.palette.primary.dark};
        }

        &:disabled {
          cursor: not-allowed;
          color: ${theme.palette.content.default};
          border-color: ${theme.palette.content.default};
          background-color: transparent;
        }
      `,
      text: `
        color: ${theme.palette.surface.light};
        background-color: transparent;

        &:hover {
          color: ${theme.palette.content.contrast};
          background-color: ${theme.palette.primary.dark};
        }

        &:disabled {
          cursor: not-allowed;
          color: ${theme.palette.content.default};
          background-color: transparent;
        }
      `,
    }[variant];
  } else {
    const hoverShade = color === 'primary' ? 'medium' : 'dark';
    const disabledShade = color === 'primary' ? 'light' : 'medium';

    return {
      solid: `
        border-color: ${theme.palette[color].default};
        color: ${theme.palette.content.contrast};
        background-color: ${theme.palette[color].default};
        
        &:hover {
          color: ${theme.palette.content.contrast};
          background-color: ${theme.palette[color][hoverShade]};
          border-color: ${theme.palette[color][hoverShade]};
        }

        &:disabled {
          cursor: not-allowed;
          color: ${theme.palette.content.contrast};
          background-color: ${theme.palette[color][disabledShade]};
          border-color: ${theme.palette[color][disabledShade]};
        }
    `,
      outlined: getOutlinedButtonStyles(theme)[color],
      text: `
        color: ${theme.palette[color].default};
        background-color: transparent;
        
        &:hover {
          color: ${theme.palette[color].default};
          background-color: ${theme.palette[color].light};
        }
        
        &:disabled {
          cursor: not-allowed;
          color: ${theme.palette[color][disabledShade]};
          background-color: transparent;
        }
    `,
    }[variant];
  }
};
