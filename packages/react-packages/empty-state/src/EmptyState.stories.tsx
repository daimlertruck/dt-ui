import { Story } from '@storybook/react';

import { Button } from '../../../dt-ui-react/components/buttons';
import { NoDataIcon } from '../../../dt-ui-react/core';

import { EmptyState } from '.';

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
      <EmptyState.Content description={description} title={title} />
      {addActionButton ? (
        <Button onClick={() => {}} variant='solid'>
          Action
        </Button>
      ) : null}
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
      <EmptyState.Content description={description} title={title} />
    </EmptyState>
  );
};

export const WithImage = EmptyStateWithImage.bind({});

WithImage.args = {
  title: 'Title here',
  description: 'Some description here.',
};
