export const OTooltipDirection = {
  Top: 'top',
  Bottom: 'bottom',
  Right: 'right',
  Left: 'left',
} as const;

export type TooltipDirection =
  (typeof OTooltipDirection)[keyof typeof OTooltipDirection];
