import { Meta, StoryObj } from '@storybook/react';

import { Box } from '.';

const meta: Meta<typeof Box> = {
  title: 'Data Display/Box',
  component: Box,
  argTypes: {
    element: { control: 'text' },
  },
  render: ({ ...props }) => (
    <Box {...props}>
      <p>Content 1</p>
      <p>Content 2</p>
    </Box>
  ),
};

export default meta;

export const Template: StoryObj<typeof Box> = {
  args: {},
};
