import { Meta, StoryObj } from '@storybook/react';

import Avatar from './Avatar';
import { AvatarType, AvatarSize } from './constants';
import avatarExampleImage from './images/example-avatar-image.png';

const meta: Meta<typeof Avatar> = {
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

export default meta;

export const Template: StoryObj<typeof Avatar> = {
  args: {
    title: 'User Name',
    type: AvatarType.Primary,
    size: AvatarSize.Medium,
  },
};

export const WithProfileImageTemplate: StoryObj<typeof Avatar> = {
  args: {
    title: 'User Name',
    type: AvatarType.Profile,
    size: AvatarSize.Large,
    imageSrc: avatarExampleImage,
  },
};
