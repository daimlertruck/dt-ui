import { Story } from '@storybook/react';

import { Counter, CounterProps } from './Counter';

export default {
  title: 'Data Display/Counter',
  component: Counter,
};

const Template: Story<CounterProps> = ({ ...props }) => {
  return <Counter {...props}>{props.children}</Counter>;
};

export const Default = Template.bind({});

Default.args = {
  children: '2',
  color: 'informative',
  outlined: false,
  isLarge: false,
};
