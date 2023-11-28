import { BaseProps } from '../../types';

import { GridStyled } from './Grid.styled';

interface GridProps extends BaseProps, React.HTMLAttributes<HTMLDivElement> {
  gridTemplateColumns?: string;
}

export const Grid = ({
  children,
  style,
  gridTemplateColumns,
  ...rest
}: GridProps) => (
  <GridStyled
    data-testid='grid'
    gridTemplateColumns={gridTemplateColumns}
    style={style}
    {...rest}
  >
    {children}
  </GridStyled>
);
