import { CustomTheme as Theme } from '../../../../types';
import { ButtonVariant, OutlinedColors, SolidColors } from '../constants/types';

export const buttonVariantStyles = (
  variant: ButtonVariant,
  theme: Theme,
  color: SolidColors | OutlinedColors
) =>
  ({
    solid: `
      text-transform: uppercase;
      border: ${theme.spacing.none};

      &:focus {
        box-shadow: 0px 2px 1px 0px #1A1A1A0D, 0px 0px 0px 4px ${theme.colors.blue_10};
        background-color: ${theme.palette[color]};
      }

      &:disabled {
        opacity: 38%;
      }
  `,
    outlined: `
      border: 1px solid;
      text-transform: uppercase;
        ${
          color === 'neutral'
            ? theme.palette.neutralDark_100
            : theme.palette[color]
        };

      &:disabled {
        color: ${
          color === 'neutral'
            ? theme.palette.neutralLight_100
            : theme.palette[color]
        };
        background-color: ${theme.colors.white};
        border-color: ${
          color === 'neutral'
            ? theme.palette.neutralLight_100
            : theme.palette[color]
        };
        cursor: default;
      }
    `,
    text: `
      border: none;

      &:disabled {
        color: ${theme.palette.neutralLight_100};
      }
    `,
  }[variant]);
