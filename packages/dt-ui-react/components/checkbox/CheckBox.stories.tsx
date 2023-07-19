import { Story } from '@storybook/react';

import { CheckBoxProps } from './Checkbox';

import { Checkbox } from '.';

export default {
  title: 'Data Display/Checkbox',
  component: Checkbox,
};

const Template: Story<CheckBoxProps> = (props) => {
  const { children, ...rest } = props;
  return <Checkbox {...rest}>{children}</Checkbox>;
};

export const Default = Template.bind({});

Default.args = {
  isDisabled: false,
  isChecked: false,
  children: 'Label',
};
