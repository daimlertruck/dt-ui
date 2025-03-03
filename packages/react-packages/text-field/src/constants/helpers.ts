import { Theme } from '@emotion/react';

import { TextFieldBackgroundFill } from './types';

export const getThemedBackgroundFill = (
  backgroundFill: TextFieldBackgroundFill,
  theme: Theme
) =>
  ({
    default: theme.palette.surface.default,
    contrast: theme.palette.surface.contrast,
    light: theme.palette.surface.light,
  }[backgroundFill] || theme.palette.surface.default);
