import { CustomTheme as Theme, daimlertruckTheme } from '@dt-dds/themes';
import { palette } from './palette';
import { fontFamily, fontStyles } from './typography';
import { shape } from './shape';

export const theme: Theme = {
  ...daimlertruckTheme,
  fontFamily,
  fontStyles,
  palette,
  shape,
};
