import { RenderOptions, render } from '@testing-library/react';
import { ReactNode } from 'react';

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

const customRender = (
  ui: ReactNode,
  options?: Omit<RenderOptions, 'wrapper'>
) => {
  const Providers = ({ children }: { children: ReactNode }) => {
    return <Provider theme={theme}>{children}</Provider>;
  };

  return render(ui, { wrapper: Providers, ...options });
};

export * from '@testing-library/react';
export { customRender as render };
