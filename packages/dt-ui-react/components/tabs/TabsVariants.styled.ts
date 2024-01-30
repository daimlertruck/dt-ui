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
      background-color: ${active
        ? theme.palette.primary.default
        : theme.palette.base.default};
      color: ${active
        ? theme.palette.content.contrast
        : theme.palette.content.body};
      border-radius: ${theme.spacing['5xs']};
      padding: ${theme.spacing['3xs']} ${theme.spacing.s};

      ${!active &&
      !disabled &&
      `
        &:hover {
          background: ${theme.palette.primary.light};
        }
      `}
    `,
    vertical: css`
      padding: 16px 14px;
      background-color: ${theme.palette.base.default};
      box-shadow: ${active
        ? `inset 2px 0px 0px 0px ${
            hasError
              ? theme.palette.error.default
              : theme.palette.primary.default
          }`
        : 0};
      color: ${active && hasError
        ? theme.palette.error.default
        : active
        ? theme.palette.primary.default
        : theme.palette.content.body};
      max-width: 300px;
      overflow: hidden;
      text-align: start;

      ${!active &&
      `
        &:hover {
          background: ${theme.palette.secondary.light};
        }
      `}
    `,
  }[orientation]);
