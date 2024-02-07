import { withProviders } from '@dt-ui/react-core';
import { render, screen } from '@testing-library/react';
import React from 'react';

import { NavItem } from './NavItem';

describe('<NavItem /> component', () => {
  const ProvidedNavItem = withProviders(NavItem);

  it('renders li html element with the correct title', () => {
    render(<ProvidedNavItem matchRoute>ActiveItem</ProvidedNavItem>);

    const activeItem = screen.getByRole('listitem');
    expect(activeItem).toHaveTextContent('ActiveItem');
  });
});
