import { render } from '@testing-library/react';
import React from 'react';

import { withProviders } from '../../utils';

import { Counter } from './Counter';

describe('<Counter /> component', () => {
  const ProvidedCounter = withProviders(Counter);

  it('should render a span html element with the given content', () => {
    const { container } = render(<ProvidedCounter>Active</ProvidedCounter>);

    expect(container).toMatchSnapshot();
  });

  it('should render outlined counter with secondary color', () => {
    const { container } = render(
      <ProvidedCounter color='secondary' outlined>
        Active
      </ProvidedCounter>
    );

    expect(container).toMatchSnapshot();
  });
});
