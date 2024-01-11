import { render } from '@testing-library/react';
import React from 'react';

import { NoDataIcon } from '../../core';
import { withProviders } from '../../utils';
import { Button } from '../buttons';

import { EmptyState } from './EmptyState';

describe('<EmptyState /> component', () => {
  const ProvidedEmptyState = withProviders(EmptyState);
  const title = 'Title here';
  const description = 'Some description here.';

  it('should render Empty State', () => {
    const { container } = render(
      <ProvidedEmptyState>
        <EmptyState.Content title={title} description={description} />
      </ProvidedEmptyState>
    );

    expect(container).toMatchSnapshot();
  });

  it('should render Empty State with a Button', () => {
    const { container } = render(
      <ProvidedEmptyState>
        <EmptyState.Content title={title} description={description} />
        <Button onClick={() => {}} variant='solid'>
          Button
        </Button>
      </ProvidedEmptyState>
    );

    expect(container).toMatchSnapshot();
  });

  it('should render Empty State with image', () => {
    const { container } = render(
      <ProvidedEmptyState>
        <NoDataIcon />
        <EmptyState.Content title={title} description={description} />
      </ProvidedEmptyState>
    );

    expect(container).toMatchSnapshot();
  });
});
