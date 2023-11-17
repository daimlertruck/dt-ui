import { render } from '@testing-library/react';
import React from 'react';

import { withProviders } from '../../utils';

import { EmptyState } from './EmptyState';

describe('<EmptyState /> component', () => {
  const ProvidedEmptyState = withProviders(EmptyState);
  const title = 'Title here';
  const description = 'Some description here.';

  it('should render Empty State', () => {
    const { container } = render(
      <ProvidedEmptyState title={title} description={description} />
    );

    expect(container).toMatchSnapshot();
  });
});
