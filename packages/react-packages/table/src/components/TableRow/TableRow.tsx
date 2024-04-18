import { BaseProps } from '@dt-ui/react-core';
import {
  Children,
  ReactNode,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useState,
} from 'react';

import { useTableContext } from '../../context';

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
  const {
    columnsLength,
    setFixedColumns,
    setFixedEndColumns,
    fixedColumnCount,
    fixedEndColumnCount,
    showBoxShadow,
  } = useTableContext();
  const fixedColumns: number[] = [];
  const fixedEndColumns: number[] = [];
  const [columnWidths, setColumnWidths] = useState<number[]>([]);
  const rowRef = useRef<HTMLTableRowElement>(null);

  useEffect(() => {
    if (rowRef?.current && (fixedColumnCount || fixedEndColumnCount)) {
      const colWidths = [...rowRef.current.children].map(
        (item) => item.clientWidth
      );
      setColumnWidths(colWidths);
    }
  }, [fixedColumnCount, fixedEndColumnCount]);

  const calculatePreviousWidth = (colIndex: number, stickyEnd = false) => {
    let previousWidths;

    if (stickyEnd) {
      previousWidths = columnWidths
        .reverse()
        .slice(0, columnWidths.length - 1 - colIndex);
    } else {
      previousWidths = columnWidths.slice(0, colIndex);
    }

    const previousTotalWidth =
      previousWidths.length > 0 ? previousWidths.reduce((a, b) => a + b) : 0;

    return previousTotalWidth;
  };

  const calculateFixedColumns = (colIndex: number) => {
    if (colIndex < fixedColumnCount) {
      fixedColumns.push(colIndex);
      showBoxShadow.splice(0, 1, colIndex);

      return calculatePreviousWidth(colIndex);
    }

    if (colIndex >= columnsLength - fixedEndColumnCount) {
      if (fixedEndColumns.length === 0) {
        showBoxShadow.splice(1, 1, colIndex);
      }
      fixedEndColumns.unshift(colIndex);
      return calculatePreviousWidth(colIndex, true);
    }
  };

  const hasFixedColumns = fixedColumnCount > 0 || fixedEndColumnCount > 0;

  const renderChildrenWithIndex = () => {
    const childrenWithIndex = Children.map(
      children,
      (child: ReactNode, index: number) => {
        if (isValidElement(child) && hasFixedColumns) {
          const previousTotalWidth = calculateFixedColumns(index);

          return cloneElement(child, {
            ...child.props,
            'data-column-index': index,
            'data-previous-width': previousTotalWidth,
          });
        }
        return child;
      }
    );

    if (fixedColumns.length) {
      setFixedColumns(fixedColumns);
    }

    if (fixedEndColumns) {
      setFixedEndColumns(fixedEndColumns);
    }
    return childrenWithIndex;
  };

  const hasStickyColumns = fixedColumnCount > 0 || fixedEndColumnCount > 0;

  return (
    <RowStyled
      ref={rowRef}
      {...(onClick && { onClick })}
      data-testid={dataTestId ?? 'table-row'}
      selectableRow={isSelectable}
      style={style}
    >
      {hasStickyColumns ? renderChildrenWithIndex() : children}
    </RowStyled>
  );
};
