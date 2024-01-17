import { BaseProps, Colors } from '../../types';

import { CounterStyled } from './Counter.styled';

export interface CounterProps extends BaseProps {
  color?: Colors;
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
      data-testid={dataTestId ?? 'counter'}
      isLarge={isLarge}
      outlined={outlined}
      style={style}
    >
      {children}
    </CounterStyled>
  );
};
