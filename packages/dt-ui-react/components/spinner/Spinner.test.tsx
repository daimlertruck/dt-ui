import { render } from '@testing-library/react';
import React from 'react';

import { withProviders } from '../../utils';

import { Spinner } from './Spinner';

describe('<Spinner /> component', () => {
  const ProvidedSpinner = withProviders(Spinner);

  it('renders span html element with the correct content', () => {
    const { container } = render(<ProvidedSpinner />);

    expect(container).toMatchSnapshot();
  });

  it('renders span html element with the smaller size and lighter contrast', () => {
    const { container } = render(
      <ProvidedSpinner size='small' spinnerTheme='light' />
    );

    expect(container).toMatchSnapshot();
  });
});
