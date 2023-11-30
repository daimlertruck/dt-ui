import styled from '@emotion/styled';

import { CustomTheme as Theme } from '../../../types';

export interface IconButtonStyledProps {
  color: keyof Theme['palette'];
}

export const IconButtonStyled = styled.button<IconButtonStyledProps>`
  ${({ theme, color, disabled }) => `
    display: flex;
    align-items: center;
    border: none;
    cursor: pointer;
    background-color: transparent;
    color: ${theme.colors.grey_200};

    &:hover {
      color: ${theme.palette[color]};
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
