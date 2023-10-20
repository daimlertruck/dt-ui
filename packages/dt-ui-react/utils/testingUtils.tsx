import { DropdownContextProvider } from '../components/dropdown/context';
import { MultiSelectContextProvider } from '../components/multi-select/context';
import { Provider } from '../components/Provider';
import { TooltipContextProvider } from '../components/tooltip/context';
import { theme } from '../themes/default';

export const withProviders = <P extends object>(
  Component: React.ComponentType<P>
) => {
  return ({ ...props }: P) => {
    return (
      <Provider theme={theme}>
        <Component {...(props as P)} />
      </Provider>
    );
  };
};

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

export const withTooltipProvider = <P extends object>(
  Component: React.ComponentType<P>
) => {
  return ({ ...props }: P) => {
    return (
      <TooltipContextProvider>
        <Component {...(props as P)} />
      </TooltipContextProvider>
    );
  };
};
