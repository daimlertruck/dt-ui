import { Story } from '@storybook/react';

import { Avatar, AvatarProps } from './Avatar';
import { AvatarType } from './constants';

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  argTypes: {
    type: {
      mapping: AvatarType,
      options: Object.values(AvatarType).filter((x) => typeof x === 'string'),
      control: { type: 'inline-radio' },
    },
  },
};

const Template: Story<AvatarProps> = ({ ...props }) => {
  return <Avatar {...props} />;
};

export const Default = Template.bind({});

Default.args = {
  type: AvatarType.Profile,
  title: 'User Name',
};
