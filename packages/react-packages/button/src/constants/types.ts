import { ComponentSize } from '@dt-ui/react-core';

export type ButtonVariant = 'solid' | 'outlined' | 'text';

export type ButtonColor = 'primary' | 'error' | 'secondary';

export type ButtonSize = Extract<ComponentSize, 'medium' | 'large' | 'small'>;
