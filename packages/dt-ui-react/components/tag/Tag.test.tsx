import { fireEvent, screen, render } from '@testing-library/react';
import React from 'react';

import { withProviders } from '../../utils';

import { Tag, TagGroup } from './Tag';

describe('<Tag /> component', () => {
  const ProvidedTag = withProviders(Tag);

  it('should render a span html element with the given content', () => {
    const { container } = render(<ProvidedTag>Active</ProvidedTag>);

    expect(container).toMatchSnapshot();
  });

  it('should render a wrapper for a group of tags', () => {
    const { container } = render(
      <TagGroup>
        <ProvidedTag>Active</ProvidedTag>
        <ProvidedTag>Inactive</ProvidedTag>
      </TagGroup>
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
  });
});
