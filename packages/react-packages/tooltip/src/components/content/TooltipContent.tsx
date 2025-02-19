import { BaseProps, Portal } from '@dt-ui/react-core';
import React, { useRef, useState, useLayoutEffect } from 'react';

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
  const tooltipRef = useRef<HTMLDivElement>(null);

  const [tooltipRect, setTooltipRect] = useState(new DOMRect(0, 0, 0, 0));

  useLayoutEffect(() => {
    if (tooltipRef.current) {
      setTooltipRect(tooltipRef.current.getBoundingClientRect());
    }
  }, [isVisible, children]);

  const position = useTooltipPosition(direction, tooltipRect);

  return children ? (
    <Portal isOpen={isVisible}>
      <TooltipContentStyled
        background={background}
        data-testid={dataTestId ?? 'tooltip-content'}
        direction={direction}
        left={position.left}
        ref={tooltipRef}
        role='tooltip'
        style={style}
        top={position.top}
      >
        {children}
      </TooltipContentStyled>
    </Portal>
  ) : null;
};
