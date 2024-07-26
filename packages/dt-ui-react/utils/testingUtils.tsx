import { MultiSelectContextProvider } from '../components/multi-select/context';

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
