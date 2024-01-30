import { Story } from '@storybook/react';

import { Spinner, SpinnerProps } from './Spinner';

export default {
  title: 'Data Display/Spinner',
  component: Spinner,
  parameters: {
    backgrounds: {
      values: [{ name: 'black', value: '#000' }],
    },
  },
};

const Template: Story<SpinnerProps> = ({ ...props }) => {
  return <Spinner {...props} />;
};

export const Default = Template.bind({});

Default.args = {
  size: 'medium',
  colorScheme: 'positive',
  loadingText: '',
};
