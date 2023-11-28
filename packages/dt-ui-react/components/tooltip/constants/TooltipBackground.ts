export const OTooltipBackground = {
  Full: 'full',
  Opacity: 'opacity',
} as const;

export type TooltipBackground =
  (typeof OTooltipBackground)[keyof typeof OTooltipBackground];
