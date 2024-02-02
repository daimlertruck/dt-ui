import styled from '@emotion/styled';

import { TOOLTIP_Z_INDEX } from '../../../../../dt-ui-react/constants';
import {
  TooltipDirection,
  OTooltipDirection,
  TooltipBackground,
  OTooltipBackground,
} from '../../constants';

interface TooltipContentStyledProps {
  direction: TooltipDirection;
  background: TooltipBackground;
  top: number;
  left: number;
}

export const TooltipContentStyled = styled.div<TooltipContentStyledProps>`
  ${({ theme, direction, top, left, background }) => `
    ${theme.fontStyles.body3};
    width: max-content;
    max-width: calc(200px + 2 * ${theme.spacing['4xs']});
    overflow-wrap: break-word;
    padding: ${theme.spacing['4xs']};
    background-color: ${theme.palette.base.dark};
    box-shadow: ${theme.shadows.s};
    color: ${theme.palette.content.contrast};
    border-radius: ${theme.spacing['5xs']};
    text-align: left;
    white-space: initial;
    position: absolute;
    z-index: ${TOOLTIP_Z_INDEX}; 
    top: ${top}px;
    left: ${left}px;
    
    &:after {
      content: "";
      position: absolute;
      border: 0px solid transparent;
    }
    ${background === OTooltipBackground.Opacity && 'opacity: 80%'};
    ${
      direction === OTooltipDirection.Bottom &&
      `
      transform: translateX(-50%);
        &:after {
          bottom: 100%;
          left: 50%;
          margin-left: -7px;
          border-width: 0px 7px 8px 7px;
          border-bottom-color: ${theme.palette.base.dark};
        }
      `
    };
    ${
      direction === OTooltipDirection.Top &&
      `
        transform: translate(-50%, -100%);
        &:after {
          top: 100%;
          left: 50%;
          margin-left: -7px;
          border-width: 8px 7px 0px 7px;
          border-top-color: ${theme.palette.base.dark};
        }
      `
    };
    ${
      direction === OTooltipDirection.Right &&
      `
        transform: translateY(-50%);
        &:after {
          top: 50%;
          right: 100%;
          margin-top: -7px;
          border-width: 7px 8px 7px 0px;
          border-right-color: ${theme.palette.base.dark};
        }
      `
    };
    ${
      direction === OTooltipDirection.Left &&
      `
        transform: translate(-100%, -50%);
        
        &:after {
          top: 50%;
          left: 100%;
          margin-top: -7px;
          border-width: 7px 0px 7px 8px;
          border-left-color: ${theme.palette.base.dark};
        }
      `
    }
  `}
`;
