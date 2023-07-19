import { CustomTheme as Theme } from '../../../../types';
import {
  ButtonVariant,
  ContainedColors,
  OutlinedColors,
} from '../constants/types';

export const buttonVariantStyles = (
  variant: ButtonVariant,
  theme: Theme,
  color: ContainedColors | OutlinedColors
) =>
  ({
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
    contained: `
      border: ${theme.spacing.none};
      text-transform: uppercase;
      &:disabled {
        opacity: 0.4;
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
