import { Story } from '@storybook/react';

import { Button, ButtonProps } from '.';

export default {
  title: 'Data Display/Button',
  component: Button,
};

const Template: Story<ButtonProps> = ({ ...props }) => {
  return <Button {...props} />;
};

export const Default = Template.bind({});

Default.args = {
  children: 'Button',
  onClick: () => null,
  isLoading: false,
  variant: 'solid',
};
