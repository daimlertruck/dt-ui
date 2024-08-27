import type { Meta, StoryObj } from '@storybook/react';

import { TextArea, TextAreaProps } from './TextArea';

const meta: Meta<TextAreaProps> = {
  title: 'Data Display/TextArea',
  component: TextArea,
  argTypes: {},
  render: ({ ...props }) => <TextArea {...props} />,
};

export default meta;

export const Default: StoryObj<TextAreaProps> = {
  args: {
    label: 'Awesome TextArea',
    maxLength: 120,
    value: '',
  },
};
