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

interface TableHeadProps extends BaseProps {
  hasFixedHeader?: boolean;
}

interface TableRowProps extends BaseProps {
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

interface ColumnHeaderProps extends BaseProps {
  textAlign?: TextAlign;
}

interface DataCellProps extends BaseProps {
  isVisible?: boolean;
  columnWidth?: string;
  textAlign?: TextAlign;
  dataLabel: string;
}

export const Table = ({ children, dataTestId, isFixed }: TableProps) => (
  <TableStyled data-testid={dataTestId ?? 'table'} isFixed={isFixed}>
    {children}
  </TableStyled>
);

export const TableHead = ({
  children,
  hasFixedHeader = false,
}: TableHeadProps) => (
  <TableHeadStyled hasFixedHeader={hasFixedHeader}>{children}</TableHeadStyled>
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
  isVisible,
}: DataCellProps) => (
  <CellStyled
    columnWidth={columnWidth}
    data-label={dataLabel}
    isVisible={isVisible}
    textAlign={textAlign}
  >
    {children}
  </CellStyled>
);
