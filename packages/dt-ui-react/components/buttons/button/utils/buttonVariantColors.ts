import { CustomTheme as Theme } from '../../../../types';
import {
  ButtonVariant,
  ContainedColors,
  OutlinedColors,
  TextColors,
} from '../constants/types';

interface ColorKeys {
  color: string;
  bgColor: string;
  hoverBgColor?: string;
  hoverColor?: string;
}

export const buttonVariantColors = (
  color: ContainedColors | OutlinedColors,
  theme: Theme
): Record<ButtonVariant, ColorKeys> => ({
  contained: {
    color: theme.colors.alpha.white,
    bgColor: theme.palette.alpha[color],
    hoverBgColor: theme.palette.alpha[`${color}Dark_300` as ContainedColors],
  },
  outlined: {
    color:
      color === 'neutral'
        ? theme.colors.alpha.gray_200
        : theme.palette.alpha[color],
    bgColor: theme.colors.alpha.white,
    hoverBgColor: theme.palette.alpha[`${color}Light_300` as OutlinedColors],
  },
  text: {
    color: theme.palette.alpha[color],
    bgColor: 'transparent',
    hoverColor: theme.palette.alpha[`${color as TextColors}Dark_300`],
  },
});
