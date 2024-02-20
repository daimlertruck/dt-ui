import { BaseProps } from '@dt-ui/react-core';

import { TableHeadStyled } from './TableHead.styled';

export interface TableHeadProps extends BaseProps {
  hasFixedHeader?: boolean;
}

export const TableHead = ({
  style,
  dataTestId,
  children,
  hasFixedHeader = false,
}: TableHeadProps) => (
  <TableHeadStyled
    data-testid={dataTestId ?? 'table-head'}
    hasFixedHeader={hasFixedHeader}
    style={style}
  >
    {children}
  </TableHeadStyled>
);
