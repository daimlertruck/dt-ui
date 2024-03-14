import { BaseProps } from '@dt-ui/react-core';
import { Children, isValidElement } from 'react';

import { useTableContext } from '../../context';

import { TableHeadStyled } from './TableHead.styled';

export interface TableHeadProps extends BaseProps {
  hasFixedHeader?: boolean;
}

export const TableHead = ({
  style,
  dataTestId,
  children,
  hasFixedHeader = false,
}: TableHeadProps) => {
  const { setColumnsLength } = useTableContext();

  Children.map(children, (child) => {
    if (isValidElement(child)) {
      setColumnsLength(child.props.children?.length ?? 0);
    }
  });

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
