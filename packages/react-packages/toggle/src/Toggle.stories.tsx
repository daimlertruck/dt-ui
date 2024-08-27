import type { Meta, StoryObj } from '@storybook/react';

import { Toggle, ToggleProps } from './Toggle';

const meta: Meta<ToggleProps> = {
  title: 'Data Display/Toggle',
  component: Toggle,
  argTypes: {},
  render: ({ ...props }) => (
    <Toggle {...props}>
      <Toggle.Label>Toggle</Toggle.Label>
    </Toggle>
  ),
};

export default meta;

export const Default: StoryObj<ToggleProps> = {
  args: {
    isChecked: false,
    isDisabled: false,
    checkedColor: 'success',
    uncheckedColor: 'secondary',
  },
};
