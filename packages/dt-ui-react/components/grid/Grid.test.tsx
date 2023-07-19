import { render, screen } from '@testing-library/react';
import React from 'react';

import { withProviders } from '../../utils';
import { Card } from '../card';

import { Grid } from './Grid';

describe('<Grid /> component', () => {
  const ProvidedGrid = withProviders(Grid);

  it('renders div html element with the correct list of items', () => {
    render(
      <ProvidedGrid>
        <Card.Title>Card Title</Card.Title>
        <Card.Detail>Card Description</Card.Detail>
      </ProvidedGrid>
    );

    const GridList = screen.getByTestId('grid');
    expect(GridList).toHaveTextContent('Card Title');
  });
});
