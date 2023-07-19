import styled from '@emotion/styled';

import { ButtonVariant, ContainedColors, OutlinedColors } from './constants';
import { buttonVariantColors, buttonVariantStyles } from './utils';

export interface ButtonStyledProps {
  isLoading?: boolean;
  variant: ButtonVariant;
  color: ContainedColors | OutlinedColors;
}

export const ButtonStyled = styled.button<ButtonStyledProps>`
  ${({ theme, isLoading, variant, color }) => `
    ${buttonVariantStyles(variant, theme, color)};
    ${theme.fontStyles.pSmall}
    font-weight: 700;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    white-space: nowrap;
    cursor: pointer;
    max-width: 20vw;
    padding: 0px 15px;
    height: 32px;
    transition: all 0.2s ease-in-out;
    ${
      isLoading &&
      `
        gap: 14px;
        pointer-events: none;
      `
    };

    &:disabled {
      pointer-events: none;
    }

    color: ${buttonVariantColors(color, theme)[variant].color};
    background-color: ${buttonVariantColors(color, theme)[variant].bgColor};

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
