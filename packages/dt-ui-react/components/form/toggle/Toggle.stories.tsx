import { Story } from '@storybook/react';

import { ToggleProps } from './Toggle';

import { Toggle } from '.';

export default {
  title: 'Data Display/form/Toggle',
  component: Toggle,
};

const Template: Story<ToggleProps & { label: string }> = ({
  label,
  ...props
}) => {
  return (
    <Toggle {...props}>
      <Toggle.Label>{label}</Toggle.Label>
    </Toggle>
  );
};

export const Default = Template.bind({});

Default.args = {
  isChecked: false,
  isDisabled: false,
  label: '',
  checkedColor: 'success',
  uncheckedColor: 'secondary',
};
