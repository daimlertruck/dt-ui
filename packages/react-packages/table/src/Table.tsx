import { BaseProps } from '@dt-ui/react-core';

import {
  TableBody,
  TableColumnHeader,
  TableDataCell,
  TableHead,
  TableRow,
} from './components';
import { TableContextProvider } from './context';
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
  <TableContextProvider>
    <TableStyled
      data-testid={dataTestId ?? 'table'}
      isFixed={isFixed}
      style={style}
    >
      {children}
    </TableStyled>
  </TableContextProvider>
);

Table.Head = TableHead;
Table.ColumnHeader = TableColumnHeader;
Table.Body = TableBody;
Table.Row = TableRow;
Table.DataCell = TableDataCell;

export default Table;
