import { render } from '@testing-library/react';
import React from 'react';

import { withProviders } from '../../utils';

import Typography from './Typography';

describe('<Typography /> component', () => {
  const ProvidedTypography = withProviders(Typography);

  it('should render a p html element with the given content', () => {
    const { container } = render(
      <ProvidedTypography fontStyles='h4'>Some text</ProvidedTypography>
    );

    expect(container).toMatchSnapshot();
  });

  it('should render a red h1 html element with the given content', () => {
    const { container } = render(
      <ProvidedTypography
        color='red_100'
        fontStyles='h4'
        element='h1'
        dataTestId='typography-h1'
      >
        Some text
      </ProvidedTypography>
    );

    const h1Element = container.querySelector('h1');
    expect(h1Element).toBeInTheDocument();
    expect(h1Element).toHaveStyle({ color: 'rgb(210, 28, 28)' });
  });

  it('should render a p html element with the primary color', () => {
    const { container } = render(
      <ProvidedTypography color='primary'>Some text</ProvidedTypography>
    );

    const pElement = container.querySelector('p');
    expect(pElement).toBeInTheDocument();
    expect(pElement).toHaveStyle({ color: 'rgb(0, 120, 214)' });
  });
});
