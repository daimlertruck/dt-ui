import styled from '@emotion/styled';

import { Size, Variant } from './types';

interface IconStyledProps {
  color: string;
  size: Size;
  variant: Variant;
  hasClick: boolean;
  disabled?: boolean;
}

const fontSize: Record<Size, string> = {
  'extra-small': '12px',
  small: '16px',
  medium: '20px',
  large: '24px',
  'extra-large': '32px',
};

export const IconStyled = styled.i<IconStyledProps>`
  ${({ size, theme, variant, color, hasClick, disabled }) => `
    font-family: DTUI-icons-${theme.icons};
    font-weight: normal;
    font-style: normal;
    font-size: ${fontSize[size]};
    display: inline-block;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    font-variation-settings: 'FILL' ${variant === 'filled' ? 1 : 0};
    color: ${disabled ? theme.palette.content.light : color};

    /* Support for all WebKit browsers. */
    -webkit-font-smoothing: antialiased;
    /* Support for Safari and Chrome. */
    text-rendering: optimizeLegibility;
  
    /* Support for Firefox. */
    -moz-osx-font-smoothing: grayscale;
  
    /* Support for IE. */
    font-feature-settings: 'liga';

    ${
      hasClick &&
      `
        cursor: ${disabled ? 'not-allowed' : 'pointer'};
        user-select: none;

        &:not(:disabled) > i {
          &:hover, &:active {
            color: ${theme.palette.accent.default};
          }
        }
      `
    };
  `}
`;
