import { Story } from '@storybook/react';

import { EmptyState } from './EmptyState';

export default {
  title: 'Data Display/EmptyState',
  component: EmptyState,
};

const Template: Story = ({ title, description }) => {
  return <EmptyState title={title} description={description} />;
};

export const Default = Template.bind({});

Default.args = {
  title: 'Title here',
  description: 'Some description here.',
};
