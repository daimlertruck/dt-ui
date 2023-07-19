import { BaseProps } from '../../types';

import { GridStyled } from './Grid.styled';

interface GridProps extends BaseProps {
  gridTemplateColumns?: string;
}

export const Grid = ({ children, style, gridTemplateColumns }: GridProps) => (
  <GridStyled
    data-testid='grid'
    gridTemplateColumns={gridTemplateColumns}
    style={style}
  >
    {children}
  </GridStyled>
);
