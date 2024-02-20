import { BaseProps } from '@dt-ui/react-core';

import {
  TableBody,
  TableColumnHeader,
  TableDataCell,
  TableHead,
  TableRow,
} from './components';
import { TableStyled } from './Table.styled';

export interface TableProps extends BaseProps {
  isFixed?: boolean;
}

const Table = ({
  children,
  dataTestId,
  style,
  isFixed = false,
}: TableProps) => (
  <TableStyled
    data-testid={dataTestId ?? 'table'}
    isFixed={isFixed}
    style={style}
  >
    {children}
  </TableStyled>
);

Table.Head = TableHead;
Table.ColumnHeader = TableColumnHeader;
Table.Body = TableBody;
Table.Row = TableRow;
Table.DataCell = TableDataCell;

export default Table;
