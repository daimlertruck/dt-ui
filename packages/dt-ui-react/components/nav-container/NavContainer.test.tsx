import { withProviders } from '@dt-ui/react-core';
import { render, screen } from '@testing-library/react';
import React from 'react';

import { NavContainer } from './NavContainer';

describe('<NavContainer /> component', () => {
  const ProvidedNavContainer = withProviders(NavContainer);

  it('renders div html element with the correct list of elements', () => {
    render(
      <ProvidedNavContainer>
        <div>Item</div>
      </ProvidedNavContainer>
    );

    const navContainer = screen.getByTestId('nav-container');
    expect(navContainer).toHaveTextContent('Item');
  });
});
