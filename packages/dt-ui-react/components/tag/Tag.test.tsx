import { fireEvent, render } from '@testing-library/react';

import { withProviders } from '../../utils';

import { Tag, TagGroup, TagProps } from './Tag';

describe('<Tag /> component', () => {
  const ProvidedTagGroup = withProviders(TagGroup);
  const ProvidedTag = withProviders(Tag);

  it('should render a wrapper for a group of tags', () => {
    const { container } = render(
      <ProvidedTagGroup>
        <ProvidedTag>Active</ProvidedTag>
        <ProvidedTag>Inactive</ProvidedTag>
      </ProvidedTagGroup>
    );

    expect(container).toMatchSnapshot();
  });

  it.each`
    isDisabled | expectedClickTimes
    ${true}    | ${0}
    ${false}   | ${1}
  `(
    'should trigger the onClick function $expectedClickTimes times if isDisabled is $isDisabled, and close button should not exist if onClose is undefined',
    ({ isDisabled, expectedClickTimes }) => {
      const onClick = jest.fn();

      const { getByTestId, queryByTestId } = render(
        <ProvidedTag isDisabled={isDisabled} onClick={onClick} dataTestId='tag'>
          Click me
        </ProvidedTag>
      );

      fireEvent.click(getByTestId('tag'));

      expect(onClick).toHaveBeenCalledTimes(expectedClickTimes);
      expect(queryByTestId('tag-close-button')).toBeNull();
    }
  );

  it.each`
    isDisabled | expectedCloseTimes
    ${true}    | ${0}
    ${false}   | ${1}
  `(
    'should trigger the close button $expectedCloseTimes times if isDisabled is $isDisabled and trigger onClose but not onClick',
    ({ isDisabled, expectedCloseTimes }) => {
      const onClick = jest.fn();
      const onClose = jest.fn();

      const { getByTestId } = render(
        <ProvidedTag
          isDisabled={isDisabled}
          onClick={onClick}
          onClose={onClose}
          dataTestId='tag'
        >
          Click me
        </ProvidedTag>
      );

      fireEvent.click(getByTestId('tag'));
      fireEvent.click(getByTestId('tag-close-button'));

      expect(onClick).toHaveBeenCalledTimes(0);
      expect(onClose).toHaveBeenCalledTimes(expectedCloseTimes);
    }
  );

  it.each`
    variant       | color        | border       | size        | isClickable | isDisabled | onClick      | onClose
    ${'solid'}    | ${'primary'} | ${'rounded'} | ${'medium'} | ${false}    | ${false}   | ${undefined} | ${undefined}
    ${'outlined'} | ${'blue'}    | ${'squared'} | ${'small'}  | ${true}     | ${false}   | ${undefined} | ${undefined}
    ${'solid'}    | ${'grey'}    | ${'rounded'} | ${'medium'} | ${false}    | ${false}   | ${jest.fn()} | ${undefined}
    ${'solid'}    | ${'grey'}    | ${'rounded'} | ${'medium'} | ${false}    | ${false}   | ${undefined} | ${jest.fn()}
    ${'solid'}    | ${'grey'}    | ${'rounded'} | ${'medium'} | ${false}    | ${true}    | ${jest.fn()} | ${jest.fn()}
  `(
    'should render the tag with variant $variant, color $color, border $border, size $size, isClickable as $isClickable, isDisabled as $isDisabled, onClick and onClose',
    ({
      variant,
      color,
      border,
      size,
      isClickable,
      isDisabled,
      onClick,
      onClose,
    }: TagProps) => {
      const { getByTestId } = render(
        <ProvidedTag
          isDisabled={isDisabled}
          isClickable={isClickable}
          variant={variant}
          color={color}
          border={border}
          size={size}
          onClick={onClick}
          onClose={onClose}
          dataTestId='tag'
        >
          Click me
        </ProvidedTag>
      );

      expect(getByTestId('tag')).toMatchSnapshot();
    }
  );
});
