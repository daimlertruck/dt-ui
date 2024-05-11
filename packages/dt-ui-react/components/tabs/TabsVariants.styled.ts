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
      background-color: ${active
        ? theme.colors.alpha.white
        : theme.colors.alpha.gray_80};
      color: ${active
        ? theme.palette.alpha.primary
        : theme.colors.alpha.gray_200};
      border-radius: 3px;
      padding: 16px 32px;
    `,
    vertical: css`
      padding: 16px 14px;
      background-color: ${theme.colors.alpha.white};
      box-shadow: ${active
        ? `inset 2px 0px 0px 0px ${
            hasError ? theme.palette.alpha.error : theme.palette.alpha.primary
          }`
        : 0};
      color: ${active && hasError
        ? theme.palette.alpha.error
        : active
        ? theme.palette.alpha.primary
        : theme.colors.alpha.gray_100};
      max-width: 300px;
      overflow: hidden;
      text-align: start;

      ${!active &&
      `
        &:hover {
          background: ${theme.colors.alpha.gray_70};
        }
      `}
    `,
  }[orientation]);
