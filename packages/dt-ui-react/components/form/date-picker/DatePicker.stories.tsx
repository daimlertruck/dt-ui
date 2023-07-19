import { Story } from '@storybook/react';

import { DatePicker, DatePickerProps } from './DatePicker';

export default {
  title: 'Data Display/form/DatePicker',
  component: DatePicker,
};

const Template: Story<DatePickerProps> = (props) => {
  return <DatePicker {...props} />;
};

export const Default = Template.bind({});

Default.args = {
  initialValue: '2023-02-02',
  required: true,
  label: 'Choose a date',
  min: '2023-03-30',
  max: '2025-03-30',
};
