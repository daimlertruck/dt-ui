import { Theme, theme as defaultTheme } from '@dt-ui/react';

const { shape: defaultShape, radius } = defaultTheme;

export const shape: Theme['shape'] = {
  ...defaultShape,
  button: radius['5xs'],
  checkbox: radius['6xs'],
  modal: radius['5xs'],
  emptyState: radius['4xs'],
  dropdown: radius['5xs'],
  message: radius['5xs'],
  progressbar: radius['none'],
  accordion: radius['5xs'],
  formField: radius['5xs'],
  tooltip: radius['5xs'],
};
