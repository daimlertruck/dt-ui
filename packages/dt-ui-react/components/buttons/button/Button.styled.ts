import styled from '@emotion/styled';

import {
  ButtonSizes,
  ButtonVariant,
  OutlinedColors,
  SolidColors,
} from './constants';
import { buttonVariantColors, buttonVariantStyles } from './utils';
import { buttonSizeStyles } from './utils/buttonSizeStyles';

export interface ButtonStyledProps {
  isLoading?: boolean;
  variant: ButtonVariant;
  color: SolidColors | OutlinedColors;
  size: ButtonSizes;
}

export const ButtonStyled = styled.button<ButtonStyledProps>`
  ${({ theme, variant, color, size }) => `
    ${buttonVariantStyles(variant, theme, color)};
    ${buttonSizeStyles(size, theme)};
    border-radius: ${theme.shape.button};
    display: flex;
    justify-content: center;
    cursor: pointer;
    width: 100%;
    min-width: 80px;
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
    align-items: center;
    gap: ${theme.spacing['4xs']};
    
    color: ${buttonVariantColors(color, theme)[variant].color};
    background-color: ${buttonVariantColors(color, theme)[variant].bgColor};

    @media only screen and (min-width: ${theme.breakpoints.s}) {
      width: auto;
    }

    &:disabled {
      cursor: not-allowed;
    }

    &:hover {
      color: ${
        buttonVariantColors(color, theme)[variant].hoverColor ??
        buttonVariantColors(color, theme)[variant].color
      };
    
      background-color: ${
        buttonVariantColors(color, theme)[variant].hoverBgColor ??
        buttonVariantColors(color, theme)[variant].bgColor
      };
    };

  `}
`;
