import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '.';

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
  title: 'Data Display/Button',
  component: Button,
};

export default meta;

export const Default: Story = {
  args: {
    children: 'Button',
    onClick: () => null,
    isLoading: false,
    variant: 'solid',
    color: 'primary',
    size: 'medium',
  },
};
