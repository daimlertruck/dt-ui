import { render } from '@testing-library/react';
import React from 'react';

import { withProviders } from '../../utils';

import { Pill } from './Pill';

describe('<Pill /> component', () => {
  const ProvidedPill = withProviders(Pill);

  it('Should render a span html element with the given content', () => {
    const { container } = render(
      <ProvidedPill color='success'>Active</ProvidedPill>
    );

    expect(container).toMatchSnapshot();
  });
});
