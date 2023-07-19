import { DropdownOptionValue } from './types';

import { Dropdown } from '.';

export default {
  title: 'Data Display/Dropdown',
  component: Dropdown,
};

const OPTIONS = [
  { text: 'Option 1', value: '1' },
  { text: 'Option 2', value: '2' },
];

interface DropdownStoryProps {
  options: DropdownOptionValue[];
  defaultValue?: DropdownOptionValue;
  message?: string;
  isDisabled?: boolean;
  hasBorder?: boolean;
  hasError?: boolean;
}

export const Default = ({
  options,
  defaultValue,
  ...props
}: DropdownStoryProps) => {
  return (
    <Dropdown defaultValue={defaultValue}>
      <Dropdown.Container>
        <Dropdown.Select label='Label' {...props}>
          {options.map((option, idx) => (
            <Dropdown.Option key={idx} option={option}>
              {option.text ?? option.value}
            </Dropdown.Option>
          ))}
        </Dropdown.Select>
      </Dropdown.Container>
    </Dropdown>
  );
};

Default.args = {
  options: OPTIONS,
  isDisabled: false,
  hasBorder: true,
  hasError: false,
};

export const WithDefaultValue = ({
  options,
  defaultValue,
  ...props
}: DropdownStoryProps) => {
  return (
    <Dropdown defaultValue={defaultValue}>
      <Dropdown.Container>
        <Dropdown.Select label='Label' {...props}>
          {options.map((option, idx) => (
            <Dropdown.Option key={idx} option={option}>
              {option.text ?? option.value}
            </Dropdown.Option>
          ))}
        </Dropdown.Select>
      </Dropdown.Container>
    </Dropdown>
  );
};

WithDefaultValue.args = {
  options: OPTIONS,
  defaultValue: OPTIONS[1],
  isDisabled: false,
  hasBorder: true,
};

export const WithOneOption = ({
  options,
  defaultValue,
  ...props
}: DropdownStoryProps) => {
  return (
    <Dropdown defaultValue={defaultValue}>
      <Dropdown.Container>
        <Dropdown.Select label='Label' {...props}>
          {options.map((option, idx) => (
            <Dropdown.Option key={idx} option={option}>
              {option.text ?? option.value}
            </Dropdown.Option>
          ))}
        </Dropdown.Select>
      </Dropdown.Container>
    </Dropdown>
  );
};

WithOneOption.args = {
  options: OPTIONS.slice(0, 1),
  isDisabled: false,
  hasBorder: true,
};

export const WithMessageOption = ({
  options,
  defaultValue,
  message,
  ...props
}: DropdownStoryProps) => {
  return (
    <Dropdown defaultValue={defaultValue}>
      <Dropdown.Container>
        <Dropdown.Select label='Label' {...props}>
          {options.map((option, idx) => (
            <Dropdown.Option key={idx} option={option}>
              {option.text ?? option.value}
            </Dropdown.Option>
          ))}
        </Dropdown.Select>
        <Dropdown.Detail>{message}</Dropdown.Detail>
      </Dropdown.Container>
    </Dropdown>
  );
};

WithMessageOption.args = {
  options: OPTIONS.slice(0, 1),
  message: 'A short message.',
  isDisabled: false,
  hasBorder: true,
};

export const OptionsWithOnlyValue = ({
  options,
  defaultValue,
  message,
  ...props
}: DropdownStoryProps) => {
  return (
    <Dropdown defaultValue={defaultValue}>
      <Dropdown.Container>
        <Dropdown.Select label='Label' {...props}>
          {options.map((option, idx) => {
            const internalOption: DropdownOptionValue = {
              value: option.value,
            };

            return (
              <Dropdown.Option key={idx} option={internalOption}>
                {internalOption?.text ?? internalOption.value}
              </Dropdown.Option>
            );
          })}
        </Dropdown.Select>
        <Dropdown.Detail>{message}</Dropdown.Detail>
      </Dropdown.Container>
    </Dropdown>
  );
};

OptionsWithOnlyValue.args = {
  options: OPTIONS,
  isDisabled: false,
  hasBorder: true,
};
