import { fireEvent, screen, render } from '@testing-library/react';

import { withProviders } from '../../utils';

import { Tag } from './Tag';

describe('<Tag /> component', () => {
  const ProvidedTag = withProviders(Tag);

  it('should render a span html element with the given content', () => {
    const { container } = render(<ProvidedTag>Active</ProvidedTag>);

    expect(container).toMatchSnapshot();
  });

  it('should show ellipsis if the content exceeds the limit width', async () => {
    const { container } = render(
      <ProvidedTag>This is a very long tag label</ProvidedTag>
    );

    expect(container).toMatchSnapshot();
  });

  it('should render a wrapper for a group of tags', () => {
    const { container } = render(
      <Tag.Group>
        <ProvidedTag>Active</ProvidedTag>
        <ProvidedTag>Inactive</ProvidedTag>
      </Tag.Group>
    );

    expect(container).toMatchSnapshot();
  });

  describe('when the tag is clicked', () => {
    it('should trigger the onClick function', () => {
      const onClick = jest.fn();

      render(<ProvidedTag onClick={onClick}>Click me</ProvidedTag>);

      const tag = screen.getByTestId('tag');
      fireEvent.click(tag);

      expect(onClick).toBeCalledTimes(1);
    });
  });

  describe('Basic tag veriant', () => {
    it('should render a span html element with given styles', () => {
      const { container } = render(
        <ProvidedTag variant='basic'>Active</ProvidedTag>
      );

      expect(container).toMatchSnapshot();
    });

    it('should trigger the onClose function', () => {
      const onClose = jest.fn();

      render(
        <ProvidedTag variant='basic' onClose={onClose} dataTestId='tag'>
          Close me
        </ProvidedTag>
      );

      const closeButton = screen.getByTestId('tag-close-button');
      fireEvent.click(closeButton);

      expect(onClose).toBeCalledTimes(1);
    });

    describe('when the tag is clickable', () => {
      it('should trigger the onClick function', () => {
        const onClick = jest.fn();

        render(
          <ProvidedTag variant='basic' onClick={onClick} isClickable={true}>
            Click me
          </ProvidedTag>
        );

        const tag = screen.getByTestId('tag');
        fireEvent.click(tag);

        expect(onClick).toBeCalledTimes(1);
      });
    });
  });
});
