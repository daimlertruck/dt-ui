import { Theme } from '@emotion/react';

import { TextAreaBackgroundFill } from './types';

export const getThemedBackgroundFill = (
  backgroundFill: TextAreaBackgroundFill,
  theme: Theme
) =>
  ({
    default: theme.palette.surface.default,
    contrast: theme.palette.surface.contrast,
    light: theme.palette.surface.light,
  }[backgroundFill] || theme.palette.surface.default);
