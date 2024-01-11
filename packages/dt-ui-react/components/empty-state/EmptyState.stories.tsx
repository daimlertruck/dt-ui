import { Story } from '@storybook/react';

import { NoDataIcon } from '../../core';
import { Button } from '../buttons';

import { EmptyState } from './EmptyState';

export default {
  title: 'Data Display/EmptyState',
  component: EmptyState,
  argTypes: {
    addActionButton: {
      control: { type: 'boolean' },
      summary: { defaultValue: false },
      description: 'Add action button to empty state',
    },
  },
};

const Template: Story = ({ title, description, addActionButton }) => {
  return (
    <EmptyState>
      <EmptyState.Content title={title} description={description} />
      {addActionButton && (
        <Button onClick={() => {}} variant='solid'>
          Action
        </Button>
      )}
    </EmptyState>
  );
};

export const Default = Template.bind({});

Default.args = {
  title: 'Title here',
  description: 'Some description here.',
  addActionButton: false,
};

const EmptyStateWithImage: Story = ({ title, description }) => {
  return (
    <EmptyState>
      <NoDataIcon />
      <EmptyState.Content title={title} description={description} />
    </EmptyState>
  );
};

export const WithImage = EmptyStateWithImage.bind({});

WithImage.args = {
  title: 'Title here',
  description: 'Some description here.',
};
