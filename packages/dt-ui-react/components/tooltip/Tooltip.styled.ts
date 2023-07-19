import styled from '@emotion/styled';

import { TooltipDirection } from './constants';

interface ContentStyledProps {
  direction: TooltipDirection;
}

export const TooltipStyled = styled.div`
  position: relative;
  display: inline-flex;
  width: fit-content;

  &:hover div[role='tooltip'] {
    display: block;
  }
`;

export const ContentStyled = styled.div<ContentStyledProps>`
  ${({ theme, direction }) => `
    ${theme.fontStyles.pXXSmall};
    display: none;
    width: max-content;
    max-width: 160px;
    overflow-wrap: break-word;
    padding: ${theme.spacing.xsmall};
    background-color: ${theme.palette.primaryDark_400};
    box-shadow: ${theme.shadows[5]};
    color: ${theme.colors.white};
    border-radius: 3px;
    text-align: left;
    white-space: initial;

    /* Position the tooltip */
    position: absolute;
    z-index: 2;
    

    &:after {
      content: "";
      position: absolute;
      border-width: 5px;
      border-style: solid;
      border-color: transparent;
    }

    ${
      direction === TooltipDirection.Bottom &&
      `
        top: 150%;
        right: 0px;

        &:after {
          bottom: 100%;
          left: 85%;
          border-bottom-color:${theme.palette.primaryDark_400};
        }
      `
    };

    ${
      direction === TooltipDirection.Top &&
      `
        bottom: 150%;
        right: 0px;

        &:after {
          top: 100%;
          left: 85%;
          border-top-color: ${theme.palette.primaryDark_400};
        }
      `
    };

    ${
      direction === TooltipDirection.Right &&
      `
        top: 0%;
        left: calc(100% + 10px);
        
        &:after {
          top: 8px;
          right: 100%;
          border-right-color: ${theme.palette.primaryDark_400};
        }
      `
    };

    ${
      direction === TooltipDirection.Left &&
      `
        top: 0%;
        right: calc(100% + 10px);
        
        &:after {
          top: 8px;
          left: 100%;
          border-left-color: ${theme.palette.primaryDark_400};
        }
      `
    }
  `}
`;
