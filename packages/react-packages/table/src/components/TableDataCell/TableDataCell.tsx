import { BaseProps } from '@dt-ui/react-core';
import { DetailedHTMLProps, TdHTMLAttributes } from 'react';

import { useTableContext } from '../../context';
import { TextAlign } from '../../types';

import { CellStyled } from './TableDataCell.styled';

export interface TableDataCellProps
  extends BaseProps,
    DetailedHTMLProps<
      TdHTMLAttributes<HTMLTableCellElement>,
      HTMLTableCellElement
    > {
  columnWidth?: string;
  textAlign?: TextAlign;
}

export const TableDataCell = ({
  children,
  columnWidth,
  style,
  dataTestId,
  textAlign = 'left',
  ...rest
}: TableDataCellProps) => {
  const { fixedColumns, fixedEndColumns, showBoxShadow } = useTableContext();
  const columnIndex = Number(
    (rest as Record<string, string>)['data-column-index']
  );
  const fixedColumnIndex = fixedColumns.indexOf(columnIndex);
  const fixedEndColumnIndex = fixedEndColumns.indexOf(columnIndex);

  let fixedProps = {};

  if (fixedColumns?.length || fixedEndColumns?.length) {
    fixedProps = {
      fixed: fixedColumnIndex !== -1,
      fixedColumnIndex,
      fixedEnd: fixedEndColumnIndex !== -1,
      fixedEndColumnIndex,
      showBoxShadow: showBoxShadow.includes(columnIndex),
    };
  }

  return (
    <CellStyled
      columnWidth={columnWidth}
      data-testid={dataTestId ?? 'table-data-cell'}
      style={style}
      textAlign={textAlign}
      {...fixedProps}
      {...rest}
    >
      {children}
    </CellStyled>
  );
};
