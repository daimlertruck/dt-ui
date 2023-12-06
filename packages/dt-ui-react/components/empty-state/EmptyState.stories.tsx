import { Story } from '@storybook/react';

import { Button } from '../buttons';

import { EmptyState } from './EmptyState';

export default {
  title: 'Data Display/EmptyState',
  component: EmptyState,
};

const Template: Story = ({ title, description, children }) => {
  return (
    <EmptyState title={title} description={description}>
      {children}
    </EmptyState>
  );
};

export const Default = Template.bind({});

Default.args = {
  title: 'Title here',
  description: 'Some description here.',
};

export const WithChildren = Template.bind({});

WithChildren.args = {
  title: 'Title here',
  description: 'Some description here.',
  children: (
    <Button onClick={() => {}} variant='contained'>
      Button
    </Button>
  ),
};
