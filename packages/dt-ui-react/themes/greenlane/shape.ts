import { radius } from '../default/radius';
import { shape as defaultShape } from '../default/shape';

export const shape = {
  ...defaultShape,
  button: radius.xl,
  modal: radius['3xs'],
};
