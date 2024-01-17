import { MultiSelectOptionValue } from './types';

import { MultiSelect } from '.';

export default {
  title: 'Data Display/MultiSelect',
  component: MultiSelect,
};

const OPTIONS = [
  { text: 'Option 1', value: '1' },
  { text: 'Option 2', value: '2', isRemovable: true },
  { text: 'Option 3', value: '3', isRemovable: true },
  { text: 'Option 4', value: '4', isRemovable: true },
];

interface MultiSelectStoryProps {
  options: MultiSelectOptionValue[];
  defaultValue?: MultiSelectOptionValue[];
  message?: string;
  hasError?: boolean;
  isDisabled?: boolean;
}

export const Default = ({ options, ...props }: MultiSelectStoryProps) => {
  return (
    <MultiSelect defaultValue={[OPTIONS[0], OPTIONS[1]]}>
      <MultiSelect.Container>
        <MultiSelect.Select
          label='Label'
          placeholder='Select the Items'
          {...props}
        >
          {options.map((option) => (
            <MultiSelect.Option key={option.value} option={option}>
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
};
