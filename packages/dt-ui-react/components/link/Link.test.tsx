import { render } from '@testing-library/react';
import React from 'react';

import { withProviders } from '../../utils';
import { Link } from '../link';

describe('<Link /> component', () => {
  const ProvidedLink = withProviders(Link);

  it('Should render a html link element with the correct title', () => {
    const { container } = render(
      <ProvidedLink href='/'>Redirect To</ProvidedLink>
    );

    expect(container).toMatchSnapshot();
  });

  it('Should render a html underlined link element with the correct title', () => {
    const { container } = render(
      <ProvidedLink href='/' isUnderline={true}>
        Redirect To
      </ProvidedLink>
    );

    expect(container).toMatchSnapshot();
  });

  it('Should render a disabled html link element', () => {
    const { container } = render(
      <ProvidedLink href='/' isDisabled={true}>
        Redirect To
      </ProvidedLink>
    );

    expect(container).toMatchSnapshot();
  });

  it('Should render an anchor element with button styles', () => {
    const { container } = render(
      <ProvidedLink href='/' type='button'>
        Redirect To
      </ProvidedLink>
    );

    expect(container).toMatchSnapshot();
  });
});
