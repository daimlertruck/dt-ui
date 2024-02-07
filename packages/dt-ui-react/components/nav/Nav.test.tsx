import { withProviders } from '@dt-ui/react-core';
import { render, screen } from '@testing-library/react';
import React from 'react';

import { Nav } from './Nav';

describe('<Nav /> component', () => {
  const ProvidedNav = withProviders(Nav);

  it('renders nav html element with the correct list of items', () => {
    render(
      <ProvidedNav>
        <li>Item</li>
      </ProvidedNav>
    );

    const navbar = screen.getByRole('navigation');
    expect(navbar).toHaveTextContent('Item');
  });
});
