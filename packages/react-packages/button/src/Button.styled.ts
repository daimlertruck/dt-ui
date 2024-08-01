import styled from '@emotion/styled';

import { ButtonSize, ButtonVariant, ButtonAppearance } from './constants';
import { buttonVariantStyles } from './utils';
import { buttonSizeStyles } from './utils/buttonSizeStyles';

export interface ButtonStyledProps {
  isLoading?: boolean;
  variant: ButtonVariant;
  color: ButtonAppearance;
  size: ButtonSize;
}

export const ButtonStyled = styled.button<ButtonStyledProps>`
  display: flex;
  justify-content: center;
  cursor: pointer;
  width: 100%;
  min-width: 80px;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out,
    border-color 0.2s ease-in-out;
  align-items: center;
  border: 2px solid transparent;

  ${({ theme, variant, color, size }) => `
    gap: ${theme.spacing['4xs']};
    border-radius: ${theme.shape.button};
    ${buttonSizeStyles(size, theme)}
    ${buttonVariantStyles(variant, theme, color)}

    @media only screen and (min-width: ${theme.breakpoints.s}) {
      width: auto;
    }
  `};
`;
