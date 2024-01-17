import { MouseEvent } from 'react';

import { BaseProps } from '../../../../types';
import { useTooltipContext } from '../../context';

import { TooltipContainerStyled } from './TooltipContainerStyled';

export interface TooltipContainerProps extends BaseProps {
  hideDelay?: number;
}
export const TooltipContainer = ({
  children,
  style,
  dataTestId,
  hideDelay = 0,
}: TooltipContainerProps) => {
  const { setIsVisible, setContainerRectProperties } = useTooltipContext();

  let hideTooltipTimeout: NodeJS.Timeout;

  const showTooltip = (e: MouseEvent<HTMLDivElement>) => {
    clearTimeout(hideTooltipTimeout);
    const { top, left, height, width } =
      e.currentTarget.getBoundingClientRect();

    setContainerRectProperties({ top, left, height, width });
    setIsVisible(true);
  };

  const hideTooltip = () => {
    hideTooltipTimeout = setTimeout(() => {
      setIsVisible(false);
    }, hideDelay);
  };

  return (
    <TooltipContainerStyled
      data-testid={dataTestId ?? 'tooltip-container'}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      style={style}
    >
      {children}
    </TooltipContainerStyled>
  );
};
