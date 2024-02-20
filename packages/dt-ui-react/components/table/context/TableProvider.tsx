import { ReactNode, createContext, useContext, useRef } from 'react';

interface TableContextState {
  columnHeaderChildren: ReactNode[];
  appendColumnHeaders: (children: ReactNode[]) => void;
  clearColumnHeaders: () => void;
}

const DEFAULT_VALUE: TableContextState = {
  columnHeaderChildren: [],
  appendColumnHeaders: () => null,
  clearColumnHeaders: () => null,
};

export const TableContext = createContext<TableContextState>(DEFAULT_VALUE);

export const TableContextProvider = ({ children }: { children: ReactNode }) => {
  const columnHeaderChildren = useRef(DEFAULT_VALUE.columnHeaderChildren);

  const appendColumnHeaders = (children: ReactNode[]) => {
    columnHeaderChildren.current = children;
  };

  const clearColumnHeaders = () => {
    columnHeaderChildren.current = [];
  };

  const providerValue: TableContextState = {
    get columnHeaderChildren() {
      return columnHeaderChildren.current;
    },
    appendColumnHeaders,
    clearColumnHeaders,
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
