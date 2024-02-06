export const AvatarSize = {
  Small: 'small',
  Medium: 'medium',
  Large: 'large',
} as const;

export type AvatarSize = (typeof AvatarSize)[keyof typeof AvatarSize];
