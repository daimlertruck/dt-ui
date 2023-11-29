import { css, Theme } from '@emotion/react';

import { Orientation } from '../../types';

export const tabsVariantStyles = (orientation: Orientation, theme: Theme) =>
  ({
    horizontal: css`
      flex-direction: row;
      gap: ${theme.spacing['4xs']};
      margin-bottom: 12px;
    `,
    vertical: css`
      flex-direction: column;
      gap: 10px;
    `,
  }[orientation]);

export const itemVariantStyles = (
  orientation: Orientation,
  theme: Theme,
  active?: boolean,
  hasError?: boolean,
  disabled?: boolean
) =>
  ({
    horizontal: css`
      ${active && !disabled
        ? theme.fontStyles.body2Bold
        : theme.fontStyles.body2};
      background-color: ${active ? theme.palette.primary : theme.colors.white};
      color: ${active ? theme.colors.white : theme.palette.textSecondary};
      border-radius: ${theme.spacing['5xs']};
      padding: ${theme.spacing['3xs']} ${theme.spacing.s};

      ${!active &&
      !disabled &&
      `
        &:hover {
          background: ${theme.palette.primaryLight_300};
          color: ${theme.palette.textPrimary};
        }
      `}
    `,
    vertical: css`
      padding: 16px 14px;
      background-color: ${theme.colors.white};
      box-shadow: ${active
        ? `inset 2px 0px 0px 0px ${
            hasError ? theme.palette.error : theme.palette.primary
          }`
        : 0};
      color: ${active && hasError
        ? theme.palette.error
        : active
        ? theme.palette.primary
        : theme.colors.grey_100};
      max-width: 300px;
      overflow: hidden;
      text-align: start;

      ${!active &&
      `
        &:hover {
          background: ${theme.colors.grey_70};
        }
      `}
    `,
  }[orientation]);
