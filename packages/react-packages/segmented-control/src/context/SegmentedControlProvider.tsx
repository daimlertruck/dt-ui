import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from 'react';

interface SegmentedControlContextState {
  selectedValue: string | undefined;
  showLabel: boolean;
  setSelectedValue: (value: string) => void;
  onChange: (value: string) => void;
}

interface SegmentedControlProviderProps {
  children: ReactNode;
  selectedValue: string | undefined;
  showLabel: boolean;
  onChange: (value: string) => void;
}

const DEFAULT_VALUE: SegmentedControlContextState = {
  selectedValue: undefined,
  showLabel: true,
  onChange: () => null,
  setSelectedValue: () => null,
};

const SegmentedControlContext =
  createContext<SegmentedControlContextState>(DEFAULT_VALUE);

export const useSegmentedControlContext = () => {
  const context = useContext(SegmentedControlContext);
  if (!context) {
    throw new Error(
      'useSegmentedControlContext must be used within a SegmentedControlProvider'
    );
  }
  return context;
};

export const SegmentedControlProvider = ({
  children,
  selectedValue,
  showLabel,
  onChange,
}: SegmentedControlProviderProps) => {
  const [value, setValue] = useState(selectedValue);

  useEffect(() => {
    setValue(selectedValue);
  }, [selectedValue]);

  const handleChangeValue = (value: string) => {
    onChange(value);
    setValue(value);
  };

  return (
    <SegmentedControlContext.Provider
      value={{
        selectedValue: value,
        setSelectedValue: handleChangeValue,
        showLabel,
        onChange,
      }}
    >
      {children}
    </SegmentedControlContext.Provider>
  );
};
