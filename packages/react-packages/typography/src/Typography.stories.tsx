import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from './Typography';
import {
  availableColors,
  availableElements,
  availableFontStyles,
} from './utils';

type Story = StoryObj<typeof Typography>;

const meta: Meta<typeof Typography> = {
  title: 'Data Display/Typography',
  component: Typography,
  argTypes: {
    element: {
      options: availableElements,
      control: 'select',
    },
    fontStyles: {
      options: availableFontStyles,
      control: 'select',
    },
    color: {
      options: availableColors,
      control: 'select',
    },
  },
};

export default meta;

export const Default: Story = {
  args: {
    element: 'h1',
    fontStyles: 'h1',
    color: 'grey_300',
    children: 'Example text',
    dataTestId: 'typography-story-id',
    style: {},
  },
};
