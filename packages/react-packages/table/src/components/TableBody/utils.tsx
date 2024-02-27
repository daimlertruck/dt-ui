import { Children, ReactNode, cloneElement, isValidElement } from 'react';

import { TableDataCellHeader } from '../TableDataCell/TableDataCell';

export const addHeadersToDataCells = (
  dataCells: ReactNode,
  headers: ReactNode[]
) => {
  return Children.map(dataCells, (dataCell, index) => {
    if (isValidElement(dataCell)) {
      const header = headers[index];
      return cloneElement(
        dataCell,
        {},
        <>
          <TableDataCellHeader>{header}</TableDataCellHeader>
          {dataCell.props.children}
        </>
      );
    }
    return dataCell;
  });
};

export const addHeadersToDataCellsInRows = (
  rows: ReactNode,
  headers: ReactNode[]
) => {
  return Children.map(rows, (row) => {
    if (isValidElement(row)) {
      return cloneElement(
        row,
        {},
        addHeadersToDataCells(row.props.children, headers)
      );
    }
    return row;
  });
};
