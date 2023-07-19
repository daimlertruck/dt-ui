import { Story } from '@storybook/react';

import { RadioGroup, RadioGroupProps, RadioProps } from './Radio';

import { Radio } from '.';

export default {
  title: 'Data Display/Radio',
  component: Radio,
};

const Template: Story<RadioProps & RadioGroupProps> = ({
  isDisabled,
  direction,
  label,
}) => {
  return (
    <RadioGroup direction={direction} onChange={() => null} name='radio-group'>
      <Radio value='1' label='Label 1' isDisabled={isDisabled} />
      <Radio value='2' label={label} isDefaultChecked={true} />
    </RadioGroup>
  );
};
export const Default = Template.bind({});

Default.args = {
  isDisabled: false,
  direction: 'row',
  label: 'Label 2',
};
