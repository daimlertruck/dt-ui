import styled from '@emotion/styled';

import { AlphaColors } from '../../types';

export interface CounterStyledProps {
  color: AlphaColors;
  outlined?: boolean;
  isLarge?: boolean;
}

export const CounterStyled = styled.span<CounterStyledProps>`
  ${({ theme, color, outlined, isLarge }) => `
    ${theme.fontStyles.alpha.tag}
    color: ${theme.colors.alpha.white};
    border: ${theme.spacing.none};
    align-items: center;
    justify-content: center;
    display: flex;
    width: ${isLarge ? '24px' : '16px'};
    height: ${isLarge ? '24px' : '16px'};
    border-radius: 50%;
    background-color: ${theme.palette.alpha[color]};

    ${
      outlined &&
      `
        border: 2px solid ${theme.palette.alpha[color]};
        color: ${theme.palette.alpha[color]};
        background-color: ${theme.colors.alpha.white}
      `
    };
  `}
`;
