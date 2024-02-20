import { Children, ReactNode, isValidElement } from 'react';

const extractColumnHeaders = (columnHeaders: ReactNode): ReactNode[] => {
  return Children.toArray(columnHeaders).reduce<ReactNode[]>(
    (accumulator, current) => {
      if (isValidElement(current)) {
        return [...accumulator, current.props.children];
      }

      return accumulator;
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
