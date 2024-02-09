import { Theme } from '@emotion/react';

import { TagSize } from './constants';

export const tagSizeStyles = (theme: Theme, size: TagSize) =>
  ({
    medium: {
      fontSize: '0.75rem',
      fontWeight: '700',
      lineHeight: '1rem',
      padding: `${theme.spacing['4xs']} ${theme.spacing['3xs']}`,
      height: '32px',
    },
    small: {
      fontSize: '0.625rem',
      fontWeight: '700',
      lineHeight: '0.875rem',
      padding: `${theme.spacing['6xs']} ${theme.spacing['4xs']}`,
      height: '18px',
    },
  }[size]);
