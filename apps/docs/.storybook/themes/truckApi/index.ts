import { theme as defaultTheme } from '@dt-dds/react';
import { Theme } from '@emotion/react';

import { palette } from './palette';
import { shape } from './shape';
import { fontFamily, fontStyles } from './typography';

export const truckAPITheme: Theme = {
  ...defaultTheme,
  fontFamily,
  fontStyles,
  palette,
  shape,
  icons: 'outlined',
};
