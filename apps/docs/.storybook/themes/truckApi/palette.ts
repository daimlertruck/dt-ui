import { Theme, theme as defaultTheme } from '@dt-dds/react';

const { palette: defaultPalette, colors } = defaultTheme;

export const palette: Theme['palette'] = {
  ...defaultPalette,
  primary: {
    default: colors.blue,
    light: colors.blue_20,
    medium: colors.blue_60,
    dark: colors.blue_80,
    contrast: colors.white,
  },
};
