import { ReactNode, createContext, useContext } from 'react';

interface DrawerContextState {
  handleClose: () => void;
}

const DEFAULT_VALUE: DrawerContextState = {
  handleClose: () => null,
};

export const DrawerContext = createContext<DrawerContextState>(DEFAULT_VALUE);

export const DrawerContextProvider = ({
  handleClose,
  children,
}: DrawerContextState & { children: ReactNode }) => {
  return (
    <DrawerContext.Provider value={{ handleClose }}>
      {children}
    </DrawerContext.Provider>
  );
};

export const useDrawerContext = () => {
  const context = useContext(DrawerContext);
  if (!context) {
    throw new Error(
      'Drawer compound components cannot be rendered outside the Drawer component'
    );
  }
  return context;
};
