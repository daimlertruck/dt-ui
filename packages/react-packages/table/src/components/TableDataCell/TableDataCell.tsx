import { BaseProps } from '@dt-ui/react-core';
import { forwardRef } from 'react';

import { TextAlign } from '../../types';

import { CellStyled, CellWithHeaderStyled } from './TableDataCell.styled';

export interface TableDataCellProps extends BaseProps {
  columnWidth?: string;
  textAlign?: TextAlign;
}

const TableDataCell = forwardRef<HTMLTableCellElement, TableDataCellProps>(
  (
    {
      children,
      columnWidth,
      style,
      dataTestId,
      textAlign = 'left',
    }: TableDataCellProps,
    ref
  ) => (
    <CellStyled
      columnWidth={columnWidth}
      data-testid={dataTestId ?? 'table-data-cell'}
      ref={ref}
      style={style}
      textAlign={textAlign}
    >
      {children}
    </CellStyled>
  )
);

const TableDataCellHeader = ({ children }: BaseProps) => (
  <CellWithHeaderStyled className='header-cell'>
    {children}
  </CellWithHeaderStyled>
);

export { TableDataCell, TableDataCellHeader };
