import { render, screen } from '@testing-library/react';
import React from 'react';

import { withProviders } from '../../utils';

import { Header } from './Header';

describe('<Header /> component', () => {
  const ProvidedHeader = withProviders(Header);

  it('renders header html element with the correct content', () => {
    render(<ProvidedHeader>Logo</ProvidedHeader>);

    const header = screen.getByRole('banner');
    expect(header).toHaveTextContent('Logo');
  });
});
