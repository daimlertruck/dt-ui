import { BaseProps } from '@dt-ui/react-core';

import { useTableContext } from '../../context/TableProvider';

import { TableHeadStyled } from './TableHead.styled';
import { extractTableHeaders } from './utils';

export interface TableHeadProps extends BaseProps {
  hasFixedHeader?: boolean;
}

export const TableHead = ({
  style,
  dataTestId,
  children,
  hasFixedHeader = false,
}: TableHeadProps) => {
  const tableContext = useTableContext();
  const headers = extractTableHeaders(children);

  tableContext.appendColumnHeaders(headers);

  return (
    <TableHeadStyled
      data-testid={dataTestId ?? 'table-head'}
      hasFixedHeader={hasFixedHeader}
      style={style}
    >
      {children}
    </TableHeadStyled>
  );
};
