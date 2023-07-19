import { Story } from '@storybook/react';

import TextArea, { TextAreaProps } from './TextArea';

export default {
  title: 'Data Display/form/TextArea',
  component: TextArea,
};

const Template: Story<TextAreaProps> = ({ ...props }) => {
  return <TextArea {...props} />;
};

export const Default = Template.bind({});

Default.args = {
  label: 'App description',
  maxLength: 120,
};
