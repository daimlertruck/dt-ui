import { BaseProps } from '@dt-dds/react-core';

export type Direction = 'column' | 'row';

export interface RadioGroupProps extends BaseProps {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  name: string;
  direction?: Direction;
}

export interface RadioProps {
  label: string;
  value: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  isDefaultChecked?: boolean;
  isDisabled?: boolean;
  name?: string;
}
