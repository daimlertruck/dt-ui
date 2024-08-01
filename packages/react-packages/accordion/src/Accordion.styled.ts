import { Theme } from '@emotion/react';
import styled from '@emotion/styled';

import { AccordionBackgroundColor } from './constants';

interface AccordinStyledProps {
  backgroundColor: AccordionBackgroundColor;
  isDisabled: boolean;
  isOpenState: boolean;
}

const accordionBackgroundColors = (
  theme: Theme
): Record<AccordionBackgroundColor, string> => ({
  white: theme.palette.surface.contrast,
  grey: theme.palette.surface.default,
});

const accordionHoverBackgroundColors = (
  theme: Theme
): Record<AccordionBackgroundColor, string> => ({
  white: theme.palette.primary.light,
  grey: theme.palette.surface.medium,
});

const accordionBorders = (
  theme: Theme
): Record<AccordionBackgroundColor, string> => ({
  white: `0px 1px 0px 0px ${theme.palette.border.light}`,
  grey: 'none',
});

export const AccordionStyled = styled.div<AccordinStyledProps>`
  ${({ theme, backgroundColor, isDisabled, isOpenState }) => `
    position: relative;
    width: 100%;
    min-width: '248px';
    background-color: ${accordionBackgroundColors(theme)[backgroundColor]};
    border-radius: ${theme.shape.accordion};
    box-shadow: ${
      isOpenState ? 'none' : accordionBorders(theme)[backgroundColor]
    };

    ${
      isDisabled
        ? `
        background-color: ${
          accordionBackgroundColors(theme)[AccordionBackgroundColor.Grey]
        }
      `
        : `
        &:hover {
          background-color: ${
            accordionHoverBackgroundColors(theme)[backgroundColor]
          };
          box-shadow: ${theme.shadows.xs}
        }
      `
    }
  `}
`;

export const DisabledOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  pointer-events: none;
  cursor: not-allowed;

  ${({ theme }) => `
    background-color: ${theme.palette.secondary.medium}
    border-radius: ${theme.shape.accordion};
  `}
`;
