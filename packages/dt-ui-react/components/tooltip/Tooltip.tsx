import { ReactNode } from 'react';

import { BaseProps } from '../../types';

import { TooltipDirection } from './constants';
import { ContentStyled, TooltipStyled } from './Tooltip.styled';

export interface TooltipProps extends BaseProps {
  content: ReactNode;
  direction?: TooltipDirection;
  styleContainer?: React.CSSProperties;
}

export const Tooltip = ({
  children,
  content,
  direction = TooltipDirection.Top,
  style,
  styleContainer,
}: TooltipProps) => {
  return (
    <TooltipStyled style={styleContainer}>
      {children}
      {content && (
        <ContentStyled direction={direction} role='tooltip' style={style}>
          {content}
        </ContentStyled>
      )}
    </TooltipStyled>
  );
};
