import { Children, ReactNode, isValidElement } from 'react';

const extractColumnHeaders = (columnHeaders: ReactNode): ReactNode[] => {
  return Children.toArray(columnHeaders).reduce<ReactNode[]>(
    (headers, columnHeader) => {
      if (isValidElement(columnHeader)) {
        return [...headers, columnHeader.props.children];
      }

      return headers;
    },
    []
  );
};

export const extractTableHeaders = (theadRow: ReactNode) => {
  if (isValidElement(theadRow)) {
    return extractColumnHeaders(theadRow.props.children);
  }

  return [];
};
