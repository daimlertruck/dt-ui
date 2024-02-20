import { BaseProps } from '@dt-ui/react-core';

import { TextAlign } from '../../types';

import { CellStyled } from './TableDataCell.styled';

export interface TableDataCellProps extends BaseProps {
  dataLabel: string;
  columnWidth?: string;
  textAlign?: TextAlign;
}

export const TableDataCell = ({
  children,
  columnWidth,
  dataLabel,
  style,
  dataTestId,
  textAlign = 'left',
}: TableDataCellProps) => (
  <CellStyled
    columnWidth={columnWidth}
    data-label={dataLabel}
    data-testid={dataTestId ?? 'table-data-cell'}
    style={style}
    textAlign={textAlign}
  >
    {children}
  </CellStyled>
);
