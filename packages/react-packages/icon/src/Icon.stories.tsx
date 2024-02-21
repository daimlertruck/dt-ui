import { codes } from '@dt-ui/icons';
import { Meta, StoryObj } from '@storybook/react';

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
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
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
    size: 'large',
    variant: 'outlined',
    color: 'black',
  },
};
