import { css, Theme } from '@emotion/react';

import { Orientation } from '../../types';

export const tabsVariantStyles = (orientation: Orientation) =>
  ({
    horizontal: css`
      flex-direction: row;
      gap: 12px;
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
  hasError?: boolean
) =>
  ({
    horizontal: css`
      background-color: ${active ? theme.colors.white : theme.colors.grey_80};
      color: ${active ? theme.palette.primary : theme.colors.grey_200};
      border-radius: 3px;
      padding: 16px 32px;
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
