import { BaseProps } from '../../../../types';
import { Portal } from '../../../Portal';
import {
  TooltipBackground,
  OTooltipBackground,
  TooltipDirection,
  OTooltipDirection,
} from '../../constants';
import { useTooltipContext } from '../../context';
import { useTooltipPosition } from '../../hooks/useTooltipPosition';

import { TooltipContentStyled } from './TooltipContentStyled';

export interface TooltipContentProps extends BaseProps {
  direction?: TooltipDirection;
  background?: TooltipBackground;
}

export const TooltipContent = ({
  children,
  direction = OTooltipDirection.Top,
  background = OTooltipBackground.Full,
  style,
  dataTestId,
}: TooltipContentProps) => {
  const { isVisible } = useTooltipContext();
  const { top, left } = useTooltipPosition(direction);

  return children ? (
    <Portal isOpen={isVisible}>
      <TooltipContentStyled
        background={background}
        data-testid={dataTestId ?? 'tooltip-content'}
        direction={direction}
        left={left}
        role='tooltip'
        style={style}
        top={top}
      >
        {children}
      </TooltipContentStyled>
    </Portal>
  ) : null;
};
