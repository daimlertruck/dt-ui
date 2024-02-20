import { BaseProps } from '@dt-ui/react-core';

import { TableBodyStyled } from './TableBody.styled';

export const TableBody = ({ children, style, dataTestId }: BaseProps) => {
  return (
    <TableBodyStyled data-testid={dataTestId ?? 'table-body'} style={style}>
      {children}
    </TableBodyStyled>
  );
};
