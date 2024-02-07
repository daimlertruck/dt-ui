import { Orientation } from '@dt-ui/react-core';
import { Story } from '@storybook/react';

import { Step } from './step';
import Stepper from './Stepper';

export default {
  title: 'Data Display/Stepper',
  component: Stepper,
};

interface TemplateProps {
  currentStep: number;
  orientation: Orientation;
  options: string[];
  completed: number[];
}

const Template: Story<TemplateProps> = ({
  currentStep,
  orientation,
  options,
  completed,
}) => (
  <Stepper orientation={orientation}>
    {options.map((opt, idx) => (
      <Step
        isActive={currentStep === idx + 1}
        isCompleted={completed.includes(idx + 1)}
        key={opt}
      >
        <Step.Counter>{idx + 1}</Step.Counter>
        <Step.Label>{opt}</Step.Label>
      </Step>
    ))}
    <Step isDisabled key={options.length}>
      <Step.Counter>{options.length + 1}</Step.Counter>
      <Step.Label>Disabled</Step.Label>
    </Step>
    <Step isError key={options.length + 1}>
      <Step.Counter>{options.length + 2}</Step.Counter>
      <Step.Label>Error</Step.Label>
    </Step>
    <Step isActive isError key={options.length + 2}>
      <Step.Counter>{options.length + 3}</Step.Counter>
      <Step.Label>Active Error</Step.Label>
    </Step>
  </Stepper>
);

export const Default = Template.bind({});

Default.args = {
  currentStep: 1,
  completed: [],
  orientation: 'vertical',
  options: ['API version definition', 'Specifications', 'Review'],
};
