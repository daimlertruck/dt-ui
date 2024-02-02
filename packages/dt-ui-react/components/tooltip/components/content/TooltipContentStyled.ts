import styled from '@emotion/styled';

import { TOOLTIP_Z_INDEX } from '../../../../constants';
import { TooltipDirection } from '../../constants';

interface TooltipContentStyledProps {
  direction: TooltipDirection;
  top: number;
  left: number;
}

export const TooltipContentStyled = styled.div<TooltipContentStyledProps>`
  ${({ theme, direction, top, left }) => `
    ${theme.fontStyles.alpha.pXXSmall};
    width: max-content;
    max-width: 160px;
    overflow-wrap: break-word;
    padding: ${theme.spacing.xsmall};
    background-color: ${theme.palette.alpha.primaryDark_400};
    box-shadow: ${theme.shadows[5]};
    color: ${theme.colors.white};
    border-radius: 4px;
    text-align: left;
    white-space: initial;
    position: absolute;
    z-index: ${TOOLTIP_Z_INDEX}; 
    top: ${top}px;
    left: ${left}px;

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
        transform: translateX(-50%);

        &:after {
          bottom: 100%;
          left: 50%;
          margin-left: -5px;
          border-bottom-color:${theme.palette.alpha.primaryDark_400};
        }
      `
    };

    ${
      direction === TooltipDirection.Top &&
      `
        transform: translate(-50%, -100%);

        &:after {
          top: 100%; 
          left: 50%;
          margin-left: -5px;
          border-top-color: ${theme.palette.alpha.primaryDark_400};
        }
      `
    };

    ${
      direction === TooltipDirection.Right &&
      `
        transform: translateY(-50%);

        &:after {
          top: 50%;
          right: 100%;
          margin-top: -5px;
          border-right-color: ${theme.palette.alpha.primaryDark_400};
        }
      `
    };

    ${
      direction === TooltipDirection.Left &&
      `        
        transform: translate(-100%, -50%);

        &:after {
          top: 50%;
          left: 100%;
          margin-top: -5px;
          border-left-color: ${theme.palette.alpha.primaryDark_400};
        }
      `
    }
  `}
`;
