import { Icon } from '@dt-ui/react-icon';
import { Meta, StoryObj } from '@storybook/react';

import { IconButton, IconButtonProps } from './IconButton';

const meta: Meta<IconButtonProps> = {
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
  render: (...props) => {
    return (
      <IconButton {...props}>
        <Icon code='edit' />
      </IconButton>
    );
  },
};
export default meta;

export const Default: StoryObj<IconButtonProps> = {
  args: {
    color: 'primary',
    onClick: () => null,
  },
};
