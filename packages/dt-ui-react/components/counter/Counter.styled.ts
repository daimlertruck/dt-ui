import styled from '@emotion/styled';

import { Colors } from '../../types';

export interface CounterStyledProps {
  color: Colors;
  outlined?: boolean;
  isLarge?: boolean;
}

export const CounterStyled = styled.span<CounterStyledProps>`
  ${({ theme, color, outlined, isLarge }) => `
    ${theme.fontStyles.tag}
    color: ${theme.colors.white};
    border: ${theme.spacing.none};
    align-items: center;
    justify-content: center;
    display: flex;
    width: ${isLarge ? '24px' : '16px'};
    height: ${isLarge ? '24px' : '16px'};
    border-radius: 50%;
    background-color: ${theme.palette[color]};

    ${
      outlined &&
      `
        border: 2px solid ${theme.palette[color]};
        color: ${theme.palette[color]};
        background-color: ${theme.colors.white}
      `
    };
  `}
`;
