import { Meta, StoryObj } from '@storybook/react';

import { LinkTextSize } from './constants';

import { Link, LinkProps } from '.';

const TEXT_SIZES = ['small', 'medium', 'large'];

const meta: Meta<LinkProps> = {
  component: Link,
  title: 'Data Display/Link',
  argTypes: {
    children: { control: 'text' },
    target: { control: 'text' },
    href: { control: 'text' },
    textSize: {
      options: TEXT_SIZES,
      control: { type: 'select' },
      description: 'Sets the size of text',
    },
    isDisabled: {
      control: { type: 'boolean' },
      defaultValue: { summary: false },
      description: 'Sets the link disabled',
    },
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'select' },
      description: 'Sets the link variant',
    },
  },
  render: ({ ...props }) => {
    return <Link {...props} />;
  },
};

export default meta;

export const Default: StoryObj<LinkProps> = {
  args: {
    children: 'Redirect to',
    href: 'https://www.google.com/',
    target: '_blank',
    textSize: LinkTextSize.Medium,
    isDisabled: false,
    variant: 'primary',
  },
};
