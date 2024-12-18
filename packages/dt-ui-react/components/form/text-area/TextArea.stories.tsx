import { Story } from '@storybook/react';
import { useState } from 'react';

import TextArea, { TextAreaProps } from './TextArea';

export default {
  title: 'Data Display/form/TextArea',
  component: TextArea,
};

const Template: Story<TextAreaProps> = ({ ...props }) => {
  const [value, setValue] = useState('value');

  return (
    <TextArea
      {...props}
      value={value}
      onChange={(evt) => setValue(evt.target.value)}
    />
  );
};

export const Default = Template.bind({});

Default.args = {
  label: 'App description',
};
