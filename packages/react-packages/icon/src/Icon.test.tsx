import { withProviders } from '@dt-ui/react-core';
import { render } from '@testing-library/react';

import { Icon } from './Icon';

describe('Icon component tests', () => {
  const ProvidedIcon = withProviders(Icon);

  const CODE = 'warning';
  it('renders Icon component', () => {
    const { container } = render(<ProvidedIcon code={CODE} />);

    expect(container).toMatchSnapshot();
  });

  it('applies the specified color in the Icon component', () => {
    const { container } = render(<ProvidedIcon code={CODE} color='red' />);

    expect(container.querySelector('i')).toHaveStyle('color: red');
  });

  it('applies the specified font size in the Icon component', () => {
    const { container } = render(<ProvidedIcon code={CODE} size='small' />);

    expect(container.querySelector('i')).toHaveStyle('font-size: 12px');
  });

  it('applies the filled style in the Icon component', () => {
    const { container } = render(<ProvidedIcon code={CODE} variant='filled' />);

    expect(container.querySelector('i')).toHaveStyle(
      "font-variation-settings: 'FILL' 1"
    );
  });
});
