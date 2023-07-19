import { Story } from '@storybook/react';

import { EditIcon } from '../../../core';

import { IconButton, IconButtonProps } from './IconButton';

export default {
  title: 'Data Display/IconButton',
  component: IconButton,
  argTypes: {
    color: {
      mapping: ['error', 'primary'],
      options: Object.values(['error', 'primary']).filter(
        (x) => typeof x === 'string'
      ),
      control: { type: 'select' },
    },
  },
};

const Template: Story<IconButtonProps> = ({ ...props }) => {
  return (
    <IconButton {...props}>
      <EditIcon />
    </IconButton>
  );
};

export const Default = Template.bind({});

Default.args = {
  color: 'primary',
  onClick: () => null,
};
