import { BaseProps } from '../../types';

import {
  TableStyled,
  RowStyled,
  ColumnHeaderStyled,
  CellStyled,
  TableBodyStyled,
  TableHeadStyled,
  TextAlign,
} from './Table.styled';

export interface TableProps extends BaseProps {
  isFixed?: boolean;
}

interface TableRowProps extends BaseProps {
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

interface ColumnHeaderProps extends BaseProps {
  textAlign?: TextAlign;
}

interface DataCellProps extends BaseProps {
  columnWidth?: string;
  textAlign?: TextAlign;
  dataLabel: string;
}

export const Table = ({ children, dataTestId, isFixed }: TableProps) => (
  <TableStyled isFixed={isFixed} data-testid={dataTestId ?? 'table'}>
    {children}
  </TableStyled>
);

export const TableHead = ({ children }: BaseProps) => (
  <TableHeadStyled>{children}</TableHeadStyled>
);

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

export const ColumnHeader = ({
  children,
  textAlign = 'left',
}: ColumnHeaderProps) => (
  <ColumnHeaderStyled textAlign={textAlign}>{children}</ColumnHeaderStyled>
);

export const DataCell = ({
  children,
  columnWidth,
  dataLabel,
  textAlign = 'left',
}: DataCellProps) => (
  <CellStyled
    data-label={dataLabel}
    columnWidth={columnWidth}
    textAlign={textAlign}
  >
    {children}
  </CellStyled>
);
