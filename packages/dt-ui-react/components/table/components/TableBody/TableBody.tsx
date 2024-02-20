import { BaseProps } from '@dt-ui/react-core';

import { useTableContext } from '../../context/TableProvider';

import { TableBodyStyled } from './TableBody.styled';
import { addHeadersToDataCellsInRows } from './utils';

export const TableBody = ({ children, style, dataTestId }: BaseProps) => {
  const tableContext = useTableContext();

  const dataCellsWithHeaders = addHeadersToDataCellsInRows(
    children,
    tableContext.columnHeadersChildren
  );

  return (
    <TableBodyStyled data-testid={dataTestId ?? 'table-body'} style={style}>
      {dataCellsWithHeaders}
    </TableBodyStyled>
  );
};
