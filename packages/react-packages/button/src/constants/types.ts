import { ComponentSize } from '@dt-ui/react-core';

export type ButtonVariant = 'solid' | 'outlined' | 'text';

export type ButtonColor = 'primary' | 'error' | 'secondary';

export type ButtonAppearance = ButtonColor | 'contrast';

export type ButtonSize = Extract<ComponentSize, 'medium' | 'large' | 'small'>;
