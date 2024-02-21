import styled from '@emotion/styled';

import { Size, Variant } from './types';

interface IconStyledProps {
  color: string;
  size: Size;
  variant: Variant;
}

const fontSize: Record<Size, string> = {
  small: '12px',
  medium: '16px',
  large: '24px',
};

export const IconStyled = styled.i<IconStyledProps>`
  ${({ size, theme, variant, color }) => `
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
    color: ${color};

    /* Support for all WebKit browsers. */
    -webkit-font-smoothing: antialiased;
    /* Support for Safari and Chrome. */
    text-rendering: optimizeLegibility;
  
    /* Support for Firefox. */
    -moz-osx-font-smoothing: grayscale;
  
    /* Support for IE. */
    font-feature-settings: 'liga';
  `}
`;
