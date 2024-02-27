import { BaseProps } from '@dt-ui/react-core';

import { TextAlign } from '../../types';

import { ColumnHeaderStyled } from './TableColumnHeader.styled';

export interface TableColumnHeaderProps extends BaseProps {
  textAlign?: TextAlign;
}

export const TableColumnHeader = ({
  children,
  style,
  dataTestId,
  textAlign = 'left',
}: TableColumnHeaderProps) => (
  <ColumnHeaderStyled
    data-testid={dataTestId ?? 'table-column-header'}
    style={style}
    textAlign={textAlign}
  >
    {children}
  </ColumnHeaderStyled>
);
