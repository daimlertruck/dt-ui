import { BaseProps, AlphaColors } from '../../types';

import { CounterStyled } from './Counter.styled';

export interface CounterProps extends BaseProps {
  color?: AlphaColors;
  outlined?: boolean;
  isLarge?: boolean;
}

export const Counter = ({
  children,
  color = 'info',
  dataTestId,
  style,
  outlined = false,
  isLarge = false,
}: CounterProps) => {
  return (
    <CounterStyled
      color={color}
      outlined={outlined}
      isLarge={isLarge}
      data-testid={dataTestId ?? 'counter'}
      style={style}
    >
      {children}
    </CounterStyled>
  );
};
