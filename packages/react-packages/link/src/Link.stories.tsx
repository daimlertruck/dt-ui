import { codes } from '@dt-ui/icons';
import { Meta, StoryObj } from '@storybook/react';

import { Link, LinkProps } from '.';

const TEXT_SIZES = ['small', 'medium', 'large'];

const meta: Meta<LinkProps> = {
  component: Link,
  title: 'Data Display/Link',
  argTypes: {
    children: { control: 'text' },
    target: { control: 'text' },
    href: { control: 'text' },
    size: {
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
    icon: {
      options: Object.keys(codes),
      control: { type: 'select' },
      description: 'Adds an Icon to the link',
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
    size: 'medium',
    isDisabled: false,
    variant: 'primary',
  },
};
