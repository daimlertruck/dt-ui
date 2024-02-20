import { BaseProps } from '@dt-ui/react-core';

import { RowStyled } from './TableRow.styled';

export interface TableRowProps extends BaseProps {
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

export const TableRow = ({
  children,
  dataTestId,
  style,
  onClick,
}: TableRowProps) => {
  const isSelectable = Boolean(onClick);

  return (
    <RowStyled
      {...(onClick && { onClick })}
      data-testid={dataTestId ?? 'table-row'}
      selectableRow={isSelectable}
      style={style}
    >
      {children}
    </RowStyled>
  );
};
