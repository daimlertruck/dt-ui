import { Meta, StoryObj } from '@storybook/react';

import { LinkTextSize, LinkType } from './constants';

import { Link, LinkProps } from '.';

const TYPES: LinkType[] = ['button', 'text'];
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
    },
    type: {
      options: TYPES,
      control: { type: 'select' },
    },
    isUnderline: {
      control: { type: 'boolean' },
      defaultValue: { summary: false },
      description: 'Add bottom border to Header',
    },
    isDisabled: {
      control: { type: 'boolean' },
      defaultValue: { summary: false },
      description: 'Add bottom border to Header',
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
    isUnderline: true,
    isDisabled: false,
    type: 'text',
  },
};
