import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';

import { MultiSelectReducer } from '../reducer';
import {
  MultiSelectOptionValue,
  MultiSelectContextState,
  Actions,
} from '../types';

interface MultiSelectContextProviderProps {
  children: ReactNode;
  defaultValue?: MultiSelectOptionValue[];
  name?: string;
}

const DEFAULT_VALUE: MultiSelectContextState = {
  state: [],
  isOpen: false,
  dispatch: () => null,
  setIsOpen: () => null,
};

export const MultiSelectContext =
  createContext<MultiSelectContextState>(DEFAULT_VALUE);

export const MultiSelectContextProvider = ({
  children,
  defaultValue,
  name,
}: MultiSelectContextProviderProps) => {
  const [state, dispatch] = useReducer(MultiSelectReducer, DEFAULT_VALUE.state);
  const [isOpen, setIsOpen] = useState(DEFAULT_VALUE.isOpen);

  useEffect(() => {
    defaultValue &&
      defaultValue.forEach((value) =>
        dispatch({ type: Actions.ADD, payload: value })
      );
  }, [defaultValue]);

  return (
    <MultiSelectContext.Provider
      value={{
        state,
        dispatch,
        isOpen,
        setIsOpen,
        name,
      }}
    >
      {children}
    </MultiSelectContext.Provider>
  );
};

export const useMultiSelectContext = () => {
  const context = useContext(MultiSelectContext);
  if (!context) {
    throw new Error(
      'MultiSelect compound components cannot be rendered outside the MultiSelect component'
    );
  }
  return context;
};
