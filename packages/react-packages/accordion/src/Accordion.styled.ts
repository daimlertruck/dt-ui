import { Theme } from '@emotion/react';
import styled from '@emotion/styled';

import { AccordionBackgroundColor } from './constants';

interface AccordinStyledProps {
  backgroundColor: AccordionBackgroundColor;
  isDisabled: boolean;
}

const accordionBackgroundColors = (
  theme: Theme
): Record<AccordionBackgroundColor, string> => ({
  white: theme.palette.primary.contrast,
  grey: theme.palette.base.light,
});

const accordionHoverBackgroundColors = (
  theme: Theme
): Record<AccordionBackgroundColor, string> => ({
  white: theme.palette.primary.light,
  grey: theme.palette.secondary.medium,
});

export const AccordionStyled = styled.div<AccordinStyledProps>`
  ${({ theme, backgroundColor, isDisabled }) => `
    position: relative;
    width: 100%;
    min-width: '248px';
    background-color: ${accordionBackgroundColors(theme)[backgroundColor]};
    border-radius: ${theme.radius['5xs']};

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
  `}
`;
