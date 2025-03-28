import { withProviders } from '@dt-ui/react-core';
import { render } from '@testing-library/react';

import { Typography } from './Typography';

describe('<Typography /> component', () => {
  const ProvidedTypography = withProviders(Typography);

  it('should render a red h1 html element with the given content', () => {
    const { container } = render(
      <ProvidedTypography
        color='red_90'
        dataTestId='typography-h1'
        element='h1'
        fontStyles='h4'
      >
        Some text
      </ProvidedTypography>
    );

    const h1Element = container.querySelector('h1');
    expect(h1Element).toBeInTheDocument();
    expect(h1Element).toHaveStyle({ color: 'rgb(109, 0, 0)' });
  });

  it('should render a p html element with the primary color', () => {
    const { container } = render(
      <ProvidedTypography color='primary.default'>Some text</ProvidedTypography>
    );

    const pElement = container.querySelector('p');
    expect(pElement).toBeInTheDocument();
    expect(pElement).toHaveStyle({ color: 'rgb(0, 0, 0)' });
  });
});
