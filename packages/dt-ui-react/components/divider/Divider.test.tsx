import { withProviders } from '@dt-ui/react-core';
import { render } from '@testing-library/react';
import React from 'react';

import { Divider } from './Divider';

describe('<Divider /> component', () => {
  const ProvidedDivider = withProviders(Divider);

  it('renders divider component', () => {
    const { container } = render(<ProvidedDivider />);

    expect(container).toMatchSnapshot();
  });
});
