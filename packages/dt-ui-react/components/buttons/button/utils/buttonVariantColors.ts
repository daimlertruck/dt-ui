import { CustomTheme as Theme } from '../../../../types';
import {
  ButtonVariant,
  OutlinedColors,
  SolidColors,
  TextColors,
} from '../constants/types';

interface ColorKeys {
  color: string;
  bgColor: string;
  hoverBgColor?: string;
  hoverColor?: string;
}

export const buttonVariantColors = (
  color: SolidColors | OutlinedColors,
  theme: Theme
): Record<ButtonVariant, ColorKeys> => ({
  solid: {
    color: theme.colors.white,
    bgColor: theme.palette[color],
    hoverBgColor: theme.palette[`${color}Dark_300` as SolidColors],
  },
  outlined: {
    color: color === 'neutral' ? theme.colors.grey_200 : theme.palette[color],
    bgColor: theme.colors.white,
    hoverBgColor: theme.palette[`${color}Light_300` as OutlinedColors],
  },
  text: {
    color: theme.palette[color],
    bgColor: 'transparent',
    hoverColor: theme.palette[`${color as TextColors}Dark_300`],
  },
});
