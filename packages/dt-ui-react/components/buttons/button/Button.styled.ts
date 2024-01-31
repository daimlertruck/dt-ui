import styled from '@emotion/styled';

import { ButtonSize, ButtonVariant, ButtonColor } from './constants';
import { buttonVariantStyles } from './utils';
import { buttonSizeStyles } from './utils/buttonSizeStyles';

export interface ButtonStyledProps {
  isLoading?: boolean;
  variant: ButtonVariant;
  color: ButtonColor;
  size: ButtonSize;
}

export const ButtonStyled = styled.button<ButtonStyledProps>`
  ${({ theme, variant, color, size }) => `
    display: flex;
    justify-content: center;
    cursor: pointer;
    width: 100%;
    min-width: 80px;
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
    align-items: center;
    gap: ${theme.spacing['4xs']};
    border-radius: ${theme.shape.button};
    
    ${buttonSizeStyles(size, theme)}
    ${buttonVariantStyles(variant, theme, color)}

    @media only screen and (min-width: ${theme.breakpoints.s}) {
      width: auto;
    }
  `}
`;
