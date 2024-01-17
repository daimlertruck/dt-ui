import { BaseProps } from '../../types';

import { BoxStyled } from './Box.styled';

export interface BoxProps extends BaseProps {
  element?: React.ElementType;
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
