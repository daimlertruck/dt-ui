import { withProviders } from '@dt-ui/react-core';
import { render } from '@testing-library/react';

import { Link } from '.';

describe('<Link /> component', () => {
  const ProvidedLink = withProviders(Link);

  it('Should render a html link element with the correct title', () => {
    const { container } = render(
      <ProvidedLink href='/'>Redirect To</ProvidedLink>
    );

    expect(container).toMatchSnapshot();
  });

  it('Should render a disabled html link element', () => {
    const { container } = render(
      <ProvidedLink href='/' isDisabled>
        Redirect To
      </ProvidedLink>
    );

    expect(container).toMatchSnapshot();
  });

  it('Should render an html link element as secondary', () => {
    const { container } = render(
      <ProvidedLink href='/' variant='secondary'>
        Redirect To
      </ProvidedLink>
    );

    expect(container).toMatchSnapshot();
  });
});
