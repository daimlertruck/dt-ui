import { radius } from '../default/radius';
import { shape as defaulShape } from '../default/shape';

export const shape = {
  ...defaulShape,
  button: radius.xl,
  checkbox: radius['6xs'],
  dropdown: radius['5xs'],
  emptyState: radius['4xs'],
  message: radius['4xs'],
  modal: radius['3xs'],
  progressbar: radius['4xs'],
};
