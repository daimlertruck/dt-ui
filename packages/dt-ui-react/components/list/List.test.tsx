import { render } from '@testing-library/react';
import React from 'react';

import { withProviders } from '../../utils';

import { List } from './List';

describe('List', () => {
  const ProvidedList = withProviders(List);

  it('renders list correctly', () => {
    const { container } = render(
      <ProvidedList>
        <List.Title>Title</List.Title>
        <li>Item 1</li>
        <li>Item 2</li>
        <List.CounterListItem>Counter Item 1</List.CounterListItem>
      </ProvidedList>
    );

    expect(container).toMatchSnapshot();
  });
});
