import { ComponentSize } from '@dt-ui/react-core';

export type ButtonVariant = 'solid' | 'outlined' | 'text';

export type ButtonAppearance =
  | 'primary'
  | 'error'
  | 'secondary'
  | 'contrast'
  | 'accent';

export type ButtonSize = Extract<ComponentSize, 'medium' | 'large' | 'small'>;
