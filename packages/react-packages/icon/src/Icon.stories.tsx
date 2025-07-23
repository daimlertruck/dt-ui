import { codes } from '@dt-ui/icons';
import { Meta, StoryObj } from '@storybook/react';

import { fontSize } from './Icon.styled';

import { Icon, IconProps } from '.';

const meta: Meta<IconProps> = {
  title: 'Data Display/Icon',
  component: Icon,
  argTypes: {
    code: {
      options: Object.keys(codes),
      control: { type: 'select' },
    },
    variant: {
      options: ['filled', 'outlined'],
      control: { type: 'radio' },
    },
    size: {
      options: Object.keys(fontSize),
      control: { type: 'radio' },
    },
    isDisabled: {
      control: 'boolean',
    },
  },
  parameters: {
    controls: {
      matchers: {
        color: /(color)$/i,
      },
    },
  },
};

export default meta;

export const Default: StoryObj<IconProps> = {
  args: {
    code: 'warning',
    size: 'l',
    variant: 'outlined',
    color: 'black',
    isDisabled: false,
  },
};
