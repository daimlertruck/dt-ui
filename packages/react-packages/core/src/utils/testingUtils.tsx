import { daimlertruckTheme } from '@dt-dds/themes';

import { Provider } from '../components';

export const withProviders = <P extends object>(
  Component: React.ComponentType<P>
) => {
  return ({ ...props }: P) => {
    return (
      <Provider theme={daimlertruckTheme}>
        <Component {...(props as P)} />
      </Provider>
    );
  };
};
