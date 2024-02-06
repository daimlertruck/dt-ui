export const AvatarType = {
  Primary: 'primary',
  Secondary: 'secondary',
  Tertiary: 'tertiary',
  Profile: 'profile',
} as const;

export type AvatarType = (typeof AvatarType)[keyof typeof AvatarType];
