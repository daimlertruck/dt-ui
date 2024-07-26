import type { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';

import { Dropdown, DropdownOptionValue } from '.';

const OPTIONS: DropdownOptionValue[] = [
  { text: 'Option 1', value: '1' },
  { text: 'Option 2', value: '2' },
  { text: 'Option 3 with a large text message label', value: '3' },
  { text: 'Option 4', value: '4' },
];

type CustomDropdownProps = ComponentProps<typeof Dropdown> & {
  isDisabled: boolean;
  hasBorder: boolean;
  hasError: boolean;
  message: string;
  options: DropdownOptionValue[];
};

const meta: Meta<CustomDropdownProps> = {
  title: 'Data Display/Dropdown',
  component: Dropdown,
  argTypes: {},
  render: ({ options, defaultValue, message, ...props }) => (
    <div
      style={{ height: '300px', padding: '10px', backgroundColor: '#EBECED' }}
    >
      <Dropdown defaultValue={defaultValue}>
        <Dropdown.Container>
          <Dropdown.Select label='Label' {...props}>
            {options.map((option: DropdownOptionValue) => (
              <Dropdown.Option key={option.value} option={option}>
                {option.text ?? option.value}
              </Dropdown.Option>
            ))}
          </Dropdown.Select>
          {message ? <Dropdown.Detail>{message}</Dropdown.Detail> : null}
        </Dropdown.Container>
      </Dropdown>
    </div>
  ),
};

export default meta;

export const Default: StoryObj<CustomDropdownProps> = {
  args: {
    options: OPTIONS,
    isDisabled: false,
    hasBorder: true,
    hasError: false,
    message: '',
  },
};
