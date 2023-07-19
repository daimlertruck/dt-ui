import { Story } from '@storybook/react';

import { HiddenText, HiddenTextProps } from './HiddenText';

export default {
  title: 'Data Display/HiddenText',
  component: HiddenText,
};

export const Default: Story<HiddenTextProps> = (props) => (
  <HiddenText {...props} />
);

Default.args = {
  text: 'Hidden',
  isVisible: false,
  size: 27,
};
