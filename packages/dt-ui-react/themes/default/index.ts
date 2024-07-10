import { Theme } from '../..';

import {
  palette as alphaPalette,
  colors as alphaColors,
} from './alpha/palette';
import { fontStyles as alphaFontStyles } from './alpha/typography';
import { animations } from './animations';
import { breakpoints } from './breakpoints';
import { palette, colors } from './palette';
import { radius } from './radius';
import { shadows } from './shadows';
import { shape } from './shape';
import { spacing } from './spacing';
import { fontFamily, fontStyles, responsiveFontStyles } from './typography';

export const theme: Theme = {
  animations,
  fontFamily,
  fontStyles: {
    alpha: alphaFontStyles,
    ...fontStyles,
  },
  palette: {
    alpha: alphaPalette,
    ...palette,
  },
  colors: {
    alpha: alphaColors,
    ...colors,
  },
  radius,
  shadows,
  shape,
  spacing,
  breakpoints,
  responsiveFontStyles,
  icons: 'outlined',
};
