import { BaseProps } from '../../../../types';
import { Portal } from '../../../Portal';
import { TooltipDirection } from '../../constants';
import { useTooltipContext } from '../../context';
import { useTooltipPosition } from '../../hooks/useTooltipPosition';

import { TooltipContentStyled } from './TooltipContentStyled';

export interface TooltipContentProps extends BaseProps {
  direction?: TooltipDirection;
}

export const TooltipContent = ({
  children,
  direction = TooltipDirection.Top,
  style,
  dataTestId,
}: TooltipContentProps) => {
  const { isVisible } = useTooltipContext();
  const { top, left } = useTooltipPosition(direction);

  return children ? (
    <Portal isOpen={isVisible}>
      <TooltipContentStyled
        data-testid={dataTestId ?? 'tooltip-content'}
        direction={direction}
        role='tooltip'
        style={style}
        top={top}
        left={left}
      >
        {children}
      </TooltipContentStyled>
    </Portal>
  ) : null;
};
