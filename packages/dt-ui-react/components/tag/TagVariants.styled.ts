import { css, Theme } from '@emotion/react';

export type TagVariant = 'basic' | 'colored';

export const tagVariantStyles = (
  variant: TagVariant,
  theme: Theme,
  isClickable?: boolean
) =>
  ({
    basic: css`
      border: 1px solid ${theme.colors.grey_90};
      background-color: ${theme.colors.white};
      color: ${theme.colors.grey_200};

      ${isClickable &&
      `&:hover {
        background-color: ${theme.colors.grey_70};
      }`}
    `,
    colored: css`
      border: ${theme.spacing.none};
      background-color: ${theme.palette.primaryLight_400};
      color: ${theme.colors.grey_300};

      ${isClickable &&
      `&:hover {
        background-color: ${theme.palette.primaryDark_200};
        color: ${theme.colors.white};
      }`}
    `,
  }[variant]);
