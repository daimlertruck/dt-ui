import { CustomTheme } from '../../types';
import { theme } from '../default/index';

import { palette } from './palette';
import { shape } from './shape';
import { fontFamily, fontStyles } from './typography';

export const truckAPITheme: CustomTheme = {
  ...theme,
  fontFamily,
  fontStyles,
  palette,
  shape,
  icons: 'outlined',
};
