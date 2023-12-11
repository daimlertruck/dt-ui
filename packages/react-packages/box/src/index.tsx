import { ReactNode, ElementType, CSSProperties } from 'react';

import { BoxStyled } from './Box.styled';

export interface BoxProps {
  element?: ElementType;
  children?: ReactNode;
  dataTestId?: string;
  style?: CSSProperties;
}

export const Box = ({
  dataTestId,
  children,
  element = 'div',
  style,
}: BoxProps) => {
  return (
    <BoxStyled as={element} data-testid={dataTestId} style={style}>
      {children}
    </BoxStyled>
  );
};
