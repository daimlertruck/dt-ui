import { BaseProps } from '@dt-ui/react-core';

import { TextAlign } from '../../types';

import { CellStyled, CellWithHeaderStyled } from './TableDataCell.styled';

export interface TableDataCellProps extends BaseProps {
  columnWidth?: string;
  textAlign?: TextAlign;
}

const TableDataCell = ({
  children,
  columnWidth,
  style,
  dataTestId,
  textAlign = 'left',
}: TableDataCellProps) => (
  <CellStyled
    columnWidth={columnWidth}
    data-testid={dataTestId ?? 'table-data-cell'}
    style={style}
    textAlign={textAlign}
  >
    {children}
  </CellStyled>
);

const TableDataCellHeader = ({ children }: BaseProps) => (
  <CellWithHeaderStyled className='header-cell'>
    {children}
  </CellWithHeaderStyled>
);

export { TableDataCell, TableDataCellHeader };
