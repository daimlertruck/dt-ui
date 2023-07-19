import { Story } from '@storybook/react';

import Typography, { TypographyProps } from './Typography';

export default {
  title: 'Data Display/Typography',
  component: Typography,
};

const Template: Story<TypographyProps> = ({ children, ...props }) => {
  return <Typography {...props}>{children}</Typography>;
};

export const Default = Template.bind({});

Default.args = {
  children: 'My Text',
  element: 'h1',
  fontStyles: 'h1',
  color: 'black',
};
