import { render } from '@testing-library/react';
import React from 'react';

import { withProviders } from '../../utils';

import { Card } from './Card';

describe('<Card /> component', () => {
  const ProvidedCard = withProviders(Card);

  it('renders div html element with the correct items', () => {
    const { container } = render(
      <ProvidedCard>
        <Card.Title>Card Title</Card.Title>
        <Card.Detail>Card Description</Card.Detail>
      </ProvidedCard>
    );

    expect(container).toMatchSnapshot();
  });
});
