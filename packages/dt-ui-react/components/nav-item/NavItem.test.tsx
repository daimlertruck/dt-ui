import { render, screen } from '@testing-library/react';
import React from 'react';

import { withProviders } from '../../utils';

import { NavItem } from './NavItem';

describe('<NavItem /> component', () => {
  const ProvidedNavItem = withProviders(NavItem);

  it('renders li html element with the correct title', () => {
    render(<ProvidedNavItem matchRoute={true}>ActiveItem</ProvidedNavItem>);

    const activeItem = screen.getByRole('listitem');
    expect(activeItem).toHaveTextContent('ActiveItem');
  });
});
