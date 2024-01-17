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
    <RadioGroup direction={direction} name='radio-group' onChange={() => null}>
      <Radio isDisabled={isDisabled} label='Label 1' value='1' />
      <Radio isDefaultChecked label={label} value='2' />
    </RadioGroup>
  );
};
export const Default = Template.bind({});

Default.args = {
  isDisabled: false,
  direction: 'row',
  label: 'Label 2',
};
