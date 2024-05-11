import { css, Theme } from '@emotion/react';

export type TagVariant = 'basic' | 'colored';

export const tagVariantStyles = (
  variant: TagVariant,
  theme: Theme,
  isClickable?: boolean
) =>
  ({
    basic: css`
      border: 1px solid ${theme.colors.alpha.gray_90};
      background-color: ${theme.colors.alpha.white};
      color: ${theme.colors.alpha.gray_200};

      ${isClickable &&
      `&:hover {
        background-color: ${theme.colors.alpha.gray_70};
      }`}
    `,
    colored: css`
      border: ${theme.spacing.none};
      background-color: ${theme.palette.alpha.primaryLight_400};
      color: ${theme.colors.alpha.gray_300};

      ${isClickable &&
      `&:hover {
        background-color: ${theme.palette.alpha.primaryDark_200};
        color: ${theme.colors.alpha.white};
      }`}
    `,
  }[variant]);
