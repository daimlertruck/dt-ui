import { radius } from '../default/radius';
import { shape as defaultShape } from '../default/shape';

export const shape = {
  ...defaultShape,
  button: radius.xl,
  message: radius['4xs'],
  modal: radius['3xs'],
  progressbar: radius['4xs'],
};
