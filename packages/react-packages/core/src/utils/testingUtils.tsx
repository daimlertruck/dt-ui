import { Provider } from '../components';
import { theme } from '../themes';

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
