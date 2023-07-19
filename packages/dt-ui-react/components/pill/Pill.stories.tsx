import { Story } from '@storybook/react';

import { Pill, PillProps } from './Pill';

export default {
  title: 'Data Display/Pill',
  component: Pill,
};

const Template: Story<PillProps> = ({ ...props }) => {
  return <Pill {...props}>{props.children}</Pill>;
};

export const Default = Template.bind({});

Default.args = {
  children: 'Active',
  color: 'success',
};
