import { CustomTheme } from '../../types';

import { animations } from './animations';
import { breakpoints } from './breakpoints';
import { palette, colors } from './palette';
import { radius } from './radius';
import { shadows } from './shadows';
import { shape } from './shape';
import { spacing } from './spacing';
import { fontFamily, fontStyles, responsiveFontStyles } from './typography';

export const theme: CustomTheme = {
  animations,
  breakpoints,
  palette,
  colors,
  radius,
  shadows,
  spacing,
  fontFamily,
  fontStyles,
  responsiveFontStyles,
  shape,
  icons: 'outlined',
};
