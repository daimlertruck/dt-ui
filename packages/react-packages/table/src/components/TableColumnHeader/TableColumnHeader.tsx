import { BaseProps } from '@dt-ui/react-core';
import { DetailedHTMLProps, ThHTMLAttributes } from 'react';

import { useTableContext } from '../../context';
import { TextAlign } from '../../types';

import { ColumnHeaderStyled } from './TableColumnHeader.styled';

export interface TableColumnHeaderProps
  extends BaseProps,
    DetailedHTMLProps<
      ThHTMLAttributes<HTMLTableCellElement>,
      HTMLTableCellElement
    > {
  textAlign?: TextAlign;
}

export const TableColumnHeader = ({
  children,
  style,
  dataTestId,
  textAlign = 'left',
  ...rest
}: TableColumnHeaderProps) => {
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
    <ColumnHeaderStyled
      data-testid={dataTestId ?? 'table-column-header'}
      style={style}
      textAlign={textAlign}
      {...fixedProps}
      {...rest}
    >
      {children}
    </ColumnHeaderStyled>
  );
};
