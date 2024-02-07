import { DropdownContextProvider } from '../components/dropdown/context';
import { MultiSelectContextProvider } from '../components/multi-select/context';

export const withDropdownProvider = <P extends object>(
  Component: React.ComponentType<P>
) => {
  return ({ ...props }: P) => {
    return (
      <DropdownContextProvider>
        <Component {...(props as P)} />
      </DropdownContextProvider>
    );
  };
};

export const withMultiSelectProvider = <P extends object>(
  Component: React.ComponentType<P>
) => {
  return ({ ...props }: P) => {
    return (
      <MultiSelectContextProvider>
        <Component {...(props as P)} />
      </MultiSelectContextProvider>
    );
  };
};
