import type { Meta, StoryObj } from '@storybook/react';

import { Divider } from './Divider';

const meta: Meta<typeof Divider> = {
  title: 'Data Display/Divider',
  component: Divider,
};

export default meta;

export const Default: StoryObj<typeof Divider> = {
  args: {},
};
