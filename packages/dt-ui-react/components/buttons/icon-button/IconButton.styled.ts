import { Colors } from '@dt-ui/react-core';
import styled from '@emotion/styled';

export interface IconButtonStyledProps {
  color: Colors | 'default';
}

export const IconButtonStyled = styled.button<IconButtonStyledProps>`
  ${({ theme, color, disabled }) => `
    display: flex;
    align-items: center;
    border: none;
    cursor: pointer;
    background-color: transparent;
    color: ${theme.palette.content.default};

    &:hover > i {
      color: ${
        color === 'default'
          ? theme.palette.content.dark
          : theme.palette[color].default
      };
    };
    
    ${
      disabled &&
      `
        opacity: 0.4;
        pointer-events: none;
      `
    }
  `}
`;
