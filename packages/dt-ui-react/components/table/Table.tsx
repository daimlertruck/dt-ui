import { BaseProps } from '../../types';

import {
  TableStyled,
  RowStyled,
  ColumnHeaderStyled,
  CellStyled,
  TableBodyStyled,
} from './Table.styled';

export interface TableProps extends BaseProps {
  isFixed?: boolean;
}

interface TableRowProps extends BaseProps {
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

interface DataCellProps extends BaseProps {
  columnWidth?: string;
}

export const Table = ({ children, dataTestId, isFixed }: TableProps) => (
  <TableStyled isFixed={isFixed} data-testid={dataTestId ?? 'table'}>
    {children}
  </TableStyled>
);

export const TableHead = ({ children }: BaseProps) => <thead>{children}</thead>;

export const TableBody = ({ children }: BaseProps) => {
  return <TableBodyStyled>{children}</TableBodyStyled>;
};

export const TableRow = ({ children, onClick }: TableRowProps) => {
  const isSelectable = Boolean(onClick);

  return (
    <RowStyled {...(onClick && { onClick })} selectableRow={isSelectable}>
      {children}
    </RowStyled>
  );
};
export const ColumnHeader = ({ children }: BaseProps) => (
  <ColumnHeaderStyled>{children}</ColumnHeaderStyled>
);

export const DataCell = ({ children, columnWidth }: DataCellProps) => (
  <CellStyled columnWidth={columnWidth}>{children}</CellStyled>
);
