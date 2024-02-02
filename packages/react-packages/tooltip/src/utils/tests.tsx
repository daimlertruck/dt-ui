import { TooltipContextProvider } from '../context';

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
