import { Colors } from '@dt-ui/react-core';
import styled from '@emotion/styled';

export interface CounterStyledProps {
  color: Colors | 'disabled';
  outlined?: boolean;
  isLarge?: boolean;
}

export const CounterStyled = styled.span<CounterStyledProps>`
  ${({ theme, color, outlined, isLarge }) => `
    ${theme.fontStyles.tag}
    color: ${
      color === 'disabled'
        ? theme.palette.content.contrast
        : theme.palette[color].contrast
    };
    border: ${theme.spacing.none};
    align-items: center;
    justify-content: center;
    display: flex;
    width: ${isLarge ? '24px' : '16px'};
    height: ${isLarge ? '24px' : '16px'};
    border-radius: 50%;
    background-color: ${
      color === 'disabled'
        ? theme.palette.content.body
        : theme.palette[color].default
    };

    ${
      outlined &&
      `
        border: 2px solid ${
          color === 'disabled'
            ? theme.palette.content.disabled
            : theme.palette[color].default
        };
        color: ${
          color === 'disabled'
            ? theme.palette.content.disabled
            : theme.palette[color].default
        };
        background-color: ${theme.palette.base.default}
      `
    };
  `}
`;
