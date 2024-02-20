import { ReactNode, createContext, useContext, useRef } from 'react';

interface TableContextState {
  columnHeadersChildren: ReactNode[];
  appendColumnHeaders: (children: ReactNode[]) => void;
}

const DEFAULT_VALUE: TableContextState = {
  columnHeadersChildren: [],
  appendColumnHeaders: () => null,
};

export const TableContext = createContext<TableContextState>(DEFAULT_VALUE);

export const TableContextProvider = ({ children }: { children: ReactNode }) => {
  const columnHeadersChildren = useRef(DEFAULT_VALUE.columnHeadersChildren);

  const appendColumnHeaders = (children: ReactNode[]) => {
    columnHeadersChildren.current = children;
  };

  const providerValue: TableContextState = {
    get columnHeadersChildren() {
      return columnHeadersChildren.current;
    },
    appendColumnHeaders,
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
