export const BackdropType = {
  Dark: 'dark',
  Light: 'light',
} as const;

export type BackdropType = (typeof BackdropType)[keyof typeof BackdropType];
