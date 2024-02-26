import { radius } from '../default/radius';
import { shape as defaulShape } from '../default/shape';

export const shape = {
  ...defaulShape,
  button: radius['5xs'],
  checkbox: radius['6xs'],
  modal: radius['5xs'],
  emptyState: radius['4xs'],
  textField: radius['none'],
  dropdown: radius['5xs'],
  message: radius['5xs'],
  progressbar: radius['none'],
};
