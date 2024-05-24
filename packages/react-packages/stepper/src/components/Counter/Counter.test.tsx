import { Colors, screen, render } from '@dt-ui/react-core';

import { Counter } from '.';

describe('<Counter /> component', () => {
  it('should render a span html element with the given content', () => {
    const { container } = render(<Counter>Active</Counter>);

    expect(container).toMatchSnapshot();
  });

  it('should render properties of a disabled Counter', () => {
    render(<Counter color='disabled'>Active</Counter>);

    const counterEl = screen.getByTestId('counter');

    expect(counterEl).toHaveStyleRule('color', '#FFFFFF');
    expect(counterEl).toHaveStyleRule('background-color', '#636464');
  });

  it.each`
    isLarge  | expectedSize
    ${true}  | ${'24px'}
    ${false} | ${'16px'}
  `(
    'should have width & height equal to $expectedSize when isLarge is $isLarge ',
    ({ isLarge, expectedSize }: { isLarge: boolean; expectedSize: string }) => {
      render(<Counter isLarge={isLarge}>1</Counter>);

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
      render(<Counter outlined={outlined}>1</Counter>);

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
    ${'disabled'}    | ${'#BABBBB'}
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
        <Counter outlined={true} color={color}>
          2
        </Counter>
      );

      const counterEl = screen.getByTestId('counter');

      expect(counterEl).toHaveStyleRule('border', `2px solid ${expectedColor}`);
      expect(counterEl).toHaveStyleRule('color', expectedColor);
    }
  );
});
