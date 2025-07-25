import { Colors, withProviders } from '@dt-ui/react-core';
import { render, screen } from '@testing-library/react';

import { Counter } from '.';

describe('<Counter /> component', () => {
  const ProvidedCounter = withProviders(Counter);
  it('should render a span html element with the given content', () => {
    const { container } = render(<ProvidedCounter>Active</ProvidedCounter>);

    expect(container).toMatchSnapshot();
  });

  it('should render properties of a disabled Counter', () => {
    render(<ProvidedCounter color='disabled'>Active</ProvidedCounter>);

    const counterEl = screen.getByTestId('counter');

    expect(counterEl).toHaveStyleRule('color', '#FFFFFF');
    expect(counterEl).toHaveStyleRule('background-color', '#292929');
  });

  it.each`
    isLarge  | expectedSize
    ${true}  | ${'24px'}
    ${false} | ${'16px'}
  `(
    'should have width & height equal to $expectedSize when isLarge is $isLarge ',
    ({ isLarge, expectedSize }: { isLarge: boolean; expectedSize: string }) => {
      render(<ProvidedCounter isLarge={isLarge}>1</ProvidedCounter>);

      const counterEl = screen.getByTestId('counter');

      expect(counterEl).toHaveStyleRule('width', expectedSize);
      expect(counterEl).toHaveStyleRule('height', expectedSize);
    }
  );

  it.each`
    outlined | expectedBorder         | expectedBackgroundColor
    ${true}  | ${'2px solid #008DFC'} | ${'#FFFFFF'}
    ${false} | ${'0'}                 | ${'#008DFC'}
  `(
    'should have border and background equals to $expectedBorder, $expectedBackgroundColor when outlined is $outlined ',
    ({
      outlined,
      expectedBorder,
      expectedBackgroundColor,
    }: {
      outlined: boolean;
      expectedBorder: string;
      expectedBackgroundColor: string;
    }) => {
      render(<ProvidedCounter outlined={outlined}>1</ProvidedCounter>);

      const counterEl = screen.getByTestId('counter');

      expect(counterEl).toHaveStyleRule('border', expectedBorder);
      expect(counterEl).toHaveStyleRule(
        'background-color',
        expectedBackgroundColor
      );
    }
  );

  it.each`
    color            | expectedColor
    ${'disabled'}    | ${'#A3A3A3'}
    ${'informative'} | ${'#008DFC'}
  `(
    'should have border and color equals to $expectedColor when color is $color and outlined is true ',
    ({
      color,
      expectedColor,
    }: {
      color: Colors | 'disabled';
      expectedColor: string;
    }) => {
      render(
        <ProvidedCounter color={color} outlined>
          2
        </ProvidedCounter>
      );

      const counterEl = screen.getByTestId('counter');

      expect(counterEl).toHaveStyleRule('border', `2px solid ${expectedColor}`);
      expect(counterEl).toHaveStyleRule('color', expectedColor);
    }
  );
});
