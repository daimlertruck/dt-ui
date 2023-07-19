import { Story } from '@storybook/react';

import { LabelFieldProps } from './LabelField';

import { LabelField } from '.';

export default {
  title: 'Data Display/form/LabelField',
  component: LabelField,
};

const Template: Story<LabelFieldProps> = ({ children, ...props }) => {
  return <LabelField {...props}>{children}</LabelField>;
};

export const Default = Template.bind({});

Default.args = {
  children: 'App description',
  isActive: false,
  isDisabled: false,
};
