import { forwardRef } from 'react';

import { BaseProps } from '../../types';

import { TableVariant } from './constants';
import {
  TableStyled,
  TableHeadStyled,
  RowStyled,
  ColumnHeaderStyled,
  CellStyled,
} from './Table.styled';

export interface TableProps extends BaseProps {
  isFixed?: boolean;
  variant?: TableVariant;
}

export interface TableVariantProps extends BaseProps {
  variant?: TableVariant;
}

interface TableRowProps extends BaseProps {
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

interface DataCellProps extends BaseProps {
  visibility?: boolean;
  variant?: TableVariant;
}

export const Table = ({
  children,
  dataTestId,
  isFixed,
  variant,
}: TableProps) => (
  <TableStyled
    isFixed={isFixed}
    variant={variant}
    data-testid={dataTestId ?? 'table'}
  >
    {children}
  </TableStyled>
);

export const TableHead = ({ children, variant }: TableVariantProps) => (
  <TableHeadStyled variant={variant}>{children}</TableHeadStyled>
);

export const TableBody = ({ children }: BaseProps) => {
  return <tbody>{children}</tbody>;
};

export const TableRow = ({ children, onClick }: TableRowProps) => {
  const isSelectable = Boolean(onClick);

  return (
    <RowStyled {...(onClick && { onClick })} selectableRow={isSelectable}>
      {children}
    </RowStyled>
  );
};
export const ColumnHeader = ({ children, variant }: TableVariantProps) => (
  <ColumnHeaderStyled variant={variant}>{children}</ColumnHeaderStyled>
);

export const DataCell = forwardRef<HTMLTableCellElement, DataCellProps>(
  ({ children, visibility, variant }: DataCellProps, ref) => (
    <CellStyled isVisible={visibility} variant={variant} ref={ref}>
      {children}
    </CellStyled>
  )
);
