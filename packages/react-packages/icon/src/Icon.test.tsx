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

    const iconElement = container.querySelector('i');
    expect(iconElement).toHaveStyleRule('color', 'red');
  });

  it.each`
    size    | fontSize
    ${'xs'} | ${'12px'}
    ${'s'}  | ${'16px'}
    ${'m'}  | ${'20px'}
    ${'l'}  | ${'24px'}
    ${'xl'} | ${'32px'}
  `(
    'applies the font size $fontSize in the Icon component when size is $size',
    ({ size, fontSize }) => {
      const { container } = render(<ProvidedIcon code={CODE} size={size} />);

      expect(container.querySelector('i')).toHaveStyle(
        `font-size: ${fontSize}`
      );
    }
  );

  it('applies the filled style in the Icon component', () => {
    const { container } = render(<ProvidedIcon code={CODE} variant='filled' />);

    expect(container.querySelector('i')).toHaveStyle(
      "font-variation-settings: 'FILL' 1"
    );
  });

  it('applies disabled style in the Icon component', () => {
    const { container } = render(<ProvidedIcon code={CODE} isDisabled />);
    const iconElement = container.querySelector('i');

    expect(iconElement).toHaveStyle('color: #A3A3A3');
    expect(iconElement).toHaveAttribute('disabled');
  });

  it.each`
    variant       | isDisabled
    ${'outlined'} | ${false}
    ${'outlined'} | ${false}
    ${'filled'}   | ${false}
    ${'filled'}   | ${true}
  `(
    'should have style if variant is $variant and isDisabled is $isDisabled',
    ({ variant, isDisabled }) => {
      const { container } = render(
        <ProvidedIcon code={CODE} isDisabled={isDisabled} variant={variant} />
      );

      expect(container).toMatchSnapshot();
    }
  );
});
