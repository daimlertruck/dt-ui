import type { Meta, StoryObj } from '@storybook/react';

import { Tag, TagProps } from './Tag';

const TagVariantOptions = {
  Solid: 'solid',
  Outlined: 'outlined',
};

const TagBorderOptions = {
  Rounded: 'rounded',
  Squared: 'squared',
};

const TagSizeOptions = {
  Small: 'small',
  Medium: 'medium',
};

const TagColorOptions = {
  Primary: 'primary',
  Blue: 'blue',
  Grey: 'grey',
  Green: 'green',
  Red: 'red',
  Yellow: 'yellow',
  Purple: 'purple',
};

const meta: Meta<TagProps> = {
  component: Tag,
  title: 'Data Display/Tag',
  argTypes: {
    onClick: {
      options: [true, undefined],
      control: {
        type: 'radio',
        labels: {
          true: 'Has onClick',
          undefined: 'Does not have onClick',
        },
      },
    },
    onClose: {
      options: [true, undefined],
      control: {
        type: 'radio',
        labels: {
          true: 'Has onClose',
          undefined: 'Does not have onClose',
        },
      },
    },
    variant: {
      options: TagVariantOptions,
      control: { type: 'radio' },
    },
    border: {
      options: TagBorderOptions,
      control: { type: 'radio' },
    },
    size: {
      options: TagSizeOptions,
      control: { type: 'radio' },
    },
    color: {
      options: TagColorOptions,
      control: { type: 'select' },
    },
  },
  render: ({ onClick, onClose, ...props }) => (
    <Tag
      {...props}
      {...(onClick &&
        ({
          onClick: () => console.log('clicked'),
        } as unknown as TagProps['onClick']))}
      {...(onClose &&
        ({
          onClose: () => console.log('closed'),
        } as unknown as TagProps['onClose']))}
    >
      {props.children}
    </Tag>
  ),
};

export default meta;

export const Default: StoryObj<TagProps> = {
  args: {
    children: 'tag label',
    variant: 'solid',
    size: 'small',
    color: 'primary',
    border: 'squared',
    isClickable: false,
    isDisabled: false,
    onClick: undefined,
    onClose: undefined,
  },
};
