import { ReactNode, createContext, useContext, useRef } from 'react';

interface TableContextState {
  columnsLength: number;
  setColumnsLength: (columnsLength: number) => void;
  fixedColumnCount: number;
  fixedEndColumnCount: number;
  fixedColumns: number[];
  setFixedColumns: (columns: number[]) => void;
  fixedEndColumns: number[];
  setFixedEndColumns: (columns: number[]) => void;
  showBoxShadow: number[];
  setShowBoxShadow: (columns: number[]) => void;
  isColumnsFixed: boolean;
}

interface TableContextProviderProps {
  children: ReactNode;
  fixedColumnCount: number;
  fixedEndColumnCount: number;
  isColumnsFixed: boolean;
}

const DEFAULT_VALUE: TableContextState = {
  columnsLength: 0,
  setColumnsLength: () => null,
  fixedColumnCount: 0,
  fixedEndColumnCount: 0,
  fixedColumns: [],
  setFixedColumns: () => null,
  fixedEndColumns: [],
  setFixedEndColumns: () => null,
  showBoxShadow: [],
  setShowBoxShadow: () => null,
  isColumnsFixed: false,
};

export const TableContext = createContext<TableContextState>(DEFAULT_VALUE);

export const TableContextProvider = ({
  children,
  fixedColumnCount,
  fixedEndColumnCount,
  isColumnsFixed,
}: TableContextProviderProps) => {
  const fixedColumnsRef = useRef<number[]>([]);
  const fixedEndColumnsRef = useRef<number[]>([]);
  const columnsLengthRef = useRef(0);
  const showBoxShadowRef = useRef<number[]>([]);

  const setFixedColumns = (columns: number[]) => {
    fixedColumnsRef.current = columns;
  };

  const setFixedEndColumns = (columns: number[]) => {
    fixedEndColumnsRef.current = columns;
  };

  const setColumnsLength = (columnsLength: number) => {
    columnsLengthRef.current = columnsLength;
  };

  const setShowBoxShadow = (columns: number[]) => {
    showBoxShadowRef.current = columns;
  };

  const providerValue: TableContextState = {
    get columnsLength() {
      return columnsLengthRef.current;
    },
    setColumnsLength,
    fixedColumnCount,
    fixedEndColumnCount,
    isColumnsFixed,
    get fixedColumns() {
      return fixedColumnsRef.current;
    },
    setFixedColumns,
    get fixedEndColumns() {
      return fixedEndColumnsRef.current;
    },
    setFixedEndColumns,
    get showBoxShadow() {
      return showBoxShadowRef.current;
    },
    setShowBoxShadow,
  };

  return (
    <TableContext.Provider value={providerValue}>
      {children}
    </TableContext.Provider>
  );
};

export const useTableContext = () => {
  const context = useContext(TableContext);
  if (!context) {
    throw new Error(
      'Table compound components cannot be rendered outside the Table component'
    );
  }
  return context;
};
