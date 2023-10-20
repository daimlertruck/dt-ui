import { MultiSelectOptionValue } from './types';

import { MultiSelect } from '.';

export default {
  title: 'Data Display/MultiSelect',
  component: MultiSelect,
};

const OPTIONS = [
  { text: 'Option 1', value: '1' },
  { text: 'Option 2', value: '2' },
  { text: 'Option 3', value: '3' },
  { text: 'Option 4', value: '4' },
];

interface MultiSelectStoryProps {
  options: MultiSelectOptionValue[];
  defaultValue?: MultiSelectOptionValue[];
  message?: string;
  hasError?: boolean;
  isDisabled?: boolean;
  isRemovableTag?: boolean;
}

export const Default = ({
  options,
  defaultValue,
  ...props
}: MultiSelectStoryProps) => {
  return (
    <MultiSelect defaultValue={defaultValue}>
      <MultiSelect.Container>
        <MultiSelect.Select
          label='Label'
          placeholder='Select the Items'
          {...props}
        >
          {options.map((option, idx) => (
            <MultiSelect.Option key={idx} option={option}>
              {option.text ?? option.value}
            </MultiSelect.Option>
          ))}
        </MultiSelect.Select>
      </MultiSelect.Container>
    </MultiSelect>
  );
};

Default.args = {
  options: OPTIONS,
  hasError: false,
  isDisabled: false,
  isRemovableTag: true,
};
