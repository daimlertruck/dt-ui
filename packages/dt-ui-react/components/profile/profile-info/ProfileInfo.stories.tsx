import { ProfileInfo } from './ProfileInfo';

export default {
  title: 'Data Display/ProfileInfo',
  component: ProfileInfo,
};

export const Default = () => (
  <ProfileInfo>
    <ProfileInfo.Item>Item 1</ProfileInfo.Item>
    <ProfileInfo.Item>Item 2</ProfileInfo.Item>
  </ProfileInfo>
);
