import { ComponentSize } from '@dt-dds/react-core';

export type TagColor =
  | 'primary'
  | 'secondary'
  | 'informative'
  | 'warning'
  | 'success'
  | 'error';

export type TagVariant = 'solid' | 'outlined';

export type TagBorder = 'rounded' | 'squared';

export type TagSize = Extract<ComponentSize, 'small' | 'medium'>;
