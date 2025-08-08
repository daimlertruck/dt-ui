import { CustomTheme as Theme, daimlertruckTheme } from '@dt-dds/themes';

import { colors, palette } from './palette';
import { fontFamily, fontStyles } from './typography';
import { shape } from './shape';

export const theme: Theme = {
  ...daimlertruckTheme,
  colors,
  fontFamily,
  fontStyles,
  palette,
  shape,
  icons: 'rounded',
};
