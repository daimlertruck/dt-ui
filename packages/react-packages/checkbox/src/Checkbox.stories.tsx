import type { Meta, StoryObj } from '@storybook/react-vite';

import { Checkbox } from './Checkbox';

type Story = StoryObj<typeof Checkbox>;

const meta: Meta<typeof Checkbox> = {
  title: 'Data Display/Checkbox',
  component: Checkbox,
  argTypes: {},
};

export default meta;

export const Default: Story = {
  args: {
    isDisabled: false,
    isChecked: false,
    children: 'Label',
    onChange: () => null,
  },
};
