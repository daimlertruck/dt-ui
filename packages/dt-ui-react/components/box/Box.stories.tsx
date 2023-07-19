import { Story } from '@storybook/react';

import { Box, BoxProps } from './Box';

export default {
  title: 'Data Display/Box',
  component: Box,
  argTypes: {
    element: { control: 'text' },
  },
};

const Template: Story<BoxProps> = ({ ...props }) => {
  return (
    <Box {...props}>
      <p>Content 1</p>
      <p>Content 2</p>
    </Box>
  );
};

export const Default = Template.bind({});

Default.args = {};
