import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

import { DropdownOptionValue } from '../types';

interface DropdownContextState {
  state: DropdownOptionValue;
  isOpen: boolean;
  name?: string;
  setState: React.Dispatch<React.SetStateAction<DropdownOptionValue>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface DropdownContextProviderProps {
  children: ReactNode;
  defaultValue?: DropdownOptionValue;
  name?: string;
}

const DEFAULT_VALUE: DropdownContextState = {
  state: {
    text: '',
    value: '',
  },
  isOpen: false,
  setState: () => null,
  setIsOpen: () => null,
};

export const DropdownContext =
  createContext<DropdownContextState>(DEFAULT_VALUE);

export const DropdownContextProvider = ({
  children,
  defaultValue,
  name,
}: DropdownContextProviderProps) => {
  const [state, setState] = useState(defaultValue ?? DEFAULT_VALUE.state);
  const [isOpen, setIsOpen] = useState(DEFAULT_VALUE.isOpen);

  useEffect(() => defaultValue && setState(defaultValue), [defaultValue]);

  return (
    <DropdownContext.Provider
      value={{
        state,
        setState,
        isOpen,
        setIsOpen,
        name,
      }}
    >
      {children}
    </DropdownContext.Provider>
  );
};

export const useDropdownContext = () => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error(
      'Dropdown compound components cannot be rendered outside the Dropdown component'
    );
  }
  return context;
};
