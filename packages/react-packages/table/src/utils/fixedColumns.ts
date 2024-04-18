import {
  Children,
  Dispatch,
  ReactElement,
  ReactNode,
  RefObject,
  SetStateAction,
  isValidElement,
} from 'react';

/**
 * Fixed columns should only become fixed when the table is scrollable. Otherwise, there's no need to calculate its position
 *
 * For performance reasons, using IntersectionObserver is the optimal choice. It allows us to be notified when the table
 * overlaps its parent container, providing this information just once when it occurs.
 */
export const observeShouldColumnsBeFixed = (
  tableRef: RefObject<HTMLTableElement | null>,
  fixedColumnCount: number,
  fixedEndColumnCount: number,
  setIsColumnsFixed: Dispatch<SetStateAction<boolean>>
) => {
  const observer = new IntersectionObserver(
    ([{ isIntersecting: isScrollHidden }]) => {
      setIsColumnsFixed(
        (fixedColumnCount > 0 || fixedEndColumnCount > 0) && !isScrollHidden
      );
    },
    { threshold: 1 }
  );

  if (tableRef.current) {
    observer.observe(tableRef.current);
  }
  return observer;
};

export const mapValidChildren = (
  children: ReactNode,
  mapCallback: (child: ReactElement, index: number) => ReactNode
) => {
  return Children.map(children, (child, index) => {
    if (isValidElement(child)) {
      return mapCallback(child, index);
    }
    return child;
  });
};

/**
 * Return each column width within an array, to be used further on positioning the fixed columns left and right.
 */
export const getColumnsWidths = (rowRef: HTMLTableRowElement) => {
  const colWidths = [...rowRef.children].map((item) => item.clientWidth);
  return colWidths;
};

/**
 * Determines the left position for a given column index.
 * The calculation is the sum of each column width before the specified index.
 *
 * Example: Consider a row with 5 columns and the given widths [100,50,100,30,10].
 * If the first 2 columns are fixed, their left positions should be calculated as 0 and 100, respectively.
 * @param {number[]} columnWidths - An array containing the widths of each column.
 * @param {number} colIndex - The index of the column for which the left position is to be determined.
 * @returns {number} Sum of widths of all preceding fixed columns, representing the left position of the fixed column.
 */
export const getFixedColumnPosition = (
  colIndex: number,
  columnsWidths: number[]
): number => {
  const previousWidths = columnsWidths.slice(0, colIndex);

  const fixedColumnLeftPosition = previousWidths.reduce((a, b) => a + b, 0);

  return fixedColumnLeftPosition;
};

/**
 * Determines the right position for a given column index.
 * The calculation is the sum of each column width after the specified index.
 *
 * Example: Suppose there is a row with 5 columns and the following widths [100, 50, 100, 30, 10].
 * If the last 2 columns are fixed, their right positions should be calculated as 0 and 10, respectively.
 *
 * @param {number} colIndex - The index of the fixed column for which the right position is to be determined.
 * @param {number[]} columnsWidths - An array containing the widths of each column.
 * @returns {number} The sum of widths of all succeeding fixed columns, representing the right position of the fixed column.
 */
export const getFixedEndColumnPosition = (
  colIndex: number,
  columnsWidths: number[]
): number => {
  const previousWidths = columnsWidths.slice(colIndex + 1);

  const fixedColumnRightPosition = previousWidths.reduce((a, b) => a + b, 0);

  return fixedColumnRightPosition;
};
