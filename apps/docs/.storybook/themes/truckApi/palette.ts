import { CustomTheme, daimlertruckTheme } from '@dt-dds/themes';

const { palette: defaultPalette, colors } = daimlertruckTheme;

export const palette: CustomTheme['palette'] = {
  ...defaultPalette,
  primary: {
    default: colors.blue,
    light: colors.blue_20,
    medium: colors.blue_60,
    dark: colors.blue_80,
  },
};
