import { Story } from '@storybook/react';

import { Avatar, AvatarProps } from './Avatar';
import { AvatarType, AvatarSize } from './constants';
import avatarExampleImage from './images/example-avatar-image.png';

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  argTypes: {
    type: {
      mapping: AvatarType,
      options: Object.values(AvatarType).filter((x) => typeof x === 'string'),
      control: { type: 'inline-radio' },
    },
    size: {
      mapping: AvatarSize,
      options: Object.values(AvatarSize).filter((x) => typeof x === 'string'),
      control: { type: 'inline-radio' },
    },
  },
};

const Template: Story<AvatarProps> = ({ ...props }) => {
  return <Avatar {...props} />;
};

export const Default = Template.bind({});

Default.args = {
  title: 'User Name',
  type: AvatarType.Primary,
  size: AvatarSize.Medium,
};

export const WithProfileImage = Template.bind({});

WithProfileImage.args = {
  title: 'User Name',
  type: AvatarType.Profile,
  size: AvatarSize.Large,
  imageSrc: avatarExampleImage,
};
