import { render } from '@testing-library/react';
import React from 'react';

import { withProviders } from '../../utils';

import { TooltipDirection } from './constants';
import { Tooltip } from './Tooltip';

describe('<Tooltip /> component', () => {
  const ProvidedTooltip = withProviders(Tooltip);

  it('renders a tooltip correctly', () => {
    const { container } = render(
      <ProvidedTooltip content='Some content'>Hover me</ProvidedTooltip>
    );

    expect(container).toMatchSnapshot();
  });

  it('renders a tooltip on the right side of the content', () => {
    const { container } = render(
      <ProvidedTooltip
        content='Some content'
        direction={TooltipDirection.Right}
      >
        Hover me
      </ProvidedTooltip>
    );

    expect(container).toMatchSnapshot();
  });

  it('renders a tooltip on the left side of the content', () => {
    const { container } = render(
      <ProvidedTooltip content='Some content' direction={TooltipDirection.Left}>
        Hover me
      </ProvidedTooltip>
    );

    expect(container).toMatchSnapshot();
  });

  it('renders a tooltip on the bottom side of the content', () => {
    const { container } = render(
      <ProvidedTooltip
        content='Some content'
        direction={TooltipDirection.Bottom}
      >
        Hover me
      </ProvidedTooltip>
    );

    expect(container).toMatchSnapshot();
  });
});
