import { DropdownContextProvider } from '../context';

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
