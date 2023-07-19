import { render } from '@testing-library/react';
import React from 'react';

import { withProviders } from '../../utils';

import { Divider } from './Divider';

describe('<Divider /> component', () => {
  const ProvidedDivider = withProviders(Divider);

  it('renders divider component', () => {
    const { container } = render(<ProvidedDivider></ProvidedDivider>);

    expect(container).toMatchSnapshot();
  });
});
