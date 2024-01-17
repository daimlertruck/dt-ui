import { render, screen } from '@testing-library/react';
import React from 'react';

import { withProviders } from '../../utils';

import { Footer, FooterItem } from './Footer';

describe('<Footer /> component', () => {
  const ProvidedFooter = withProviders(Footer);

  it('renders footer html element with the correct items', () => {
    render(
      <ProvidedFooter>
        <FooterItem>
          <a href='/'>First Item</a>
        </FooterItem>
        <FooterItem>
          <a href='/'>Second Item</a>
        </FooterItem>
        <FooterItem>
          <a href='/'>Third Item</a>
        </FooterItem>
      </ProvidedFooter>
    );

    const footer = screen.getByRole('contentinfo');

    expect(footer).toBeInTheDocument();
    expect(footer).toHaveTextContent('First Item');
  });
});
