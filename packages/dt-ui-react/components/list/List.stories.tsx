import { Story } from '@storybook/react';

import { List, ListProps } from './List';

export default {
  title: 'Data Display/List',
  component: List,
};

const Template: Story<ListProps> = (props) => {
  return (
    <List {...props}>
      <li>Item 1</li>
      <li>Item 2</li>
    </List>
  );
};

export const Default = Template.bind({});
