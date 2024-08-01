import { palette as defaultPalette, colors } from '../default/palette';

export const palette = {
  ...defaultPalette,
  primary: {
    default: colors.blue,
    light: colors.blue_20,
    medium: colors.blue_60,
    dark: colors.blue_80,
    contrast: colors.white,
  },
};
