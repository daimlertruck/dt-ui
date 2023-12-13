import { ComponentSize } from '../../../../types/componentSize';

export type ButtonVariant = 'solid' | 'outlined' | 'text';

export type OutlinedColors = 'neutral';

export type SolidColors = 'primary' | 'error';

export type TextColors = 'primary';

export type ButtonSizes = Extract<ComponentSize, 'medium' | 'large' | 'small'>;
