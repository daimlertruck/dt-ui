import { ComponentSize } from '@dt-ui/react-core';

export type TagColor =
  | 'primary'
  | 'blue'
  | 'grey'
  | 'green'
  | 'red'
  | 'yellow'
  | 'purple';

export type TagVariant = 'solid' | 'outlined';

export type TagBorder = 'rounded' | 'squared';

export type TagSize = Extract<ComponentSize, 'small' | 'medium'>;
