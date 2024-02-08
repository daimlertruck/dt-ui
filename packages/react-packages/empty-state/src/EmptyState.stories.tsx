import { Meta, StoryObj } from '@storybook/react';

import { Button } from '../../../dt-ui-react/components/buttons';
import { NoDataIcon } from '../../../dt-ui-react/core';

import { EmptyState, EmptyStateContentProps } from '.';

type EmptyStateProps = EmptyStateContentProps & { addActionButton?: boolean };

const meta: Meta<EmptyStateProps> = {
  title: 'Data Display/EmptyState',
  component: EmptyState,
  argTypes: {
    addActionButton: {
      control: { type: 'boolean' },
      summary: { defaultValue: false },
      description: 'Add action button to empty state',
    },
  },
  render: ({ title, description, addActionButton }) => (
    <EmptyState>
      <EmptyState.Content description={description} title={title} />
      {addActionButton ? (
        <Button onClick={() => {}} variant='solid'>
          Action
        </Button>
      ) : null}
    </EmptyState>
  ),
};

export default meta;

export const Default: StoryObj<EmptyStateProps> = {
  args: {
    title: 'Title here',
    description: 'Some description here.',
    addActionButton: false,
  },
};

export const EmptyStateWithImage: StoryObj<EmptyStateProps> = {
  args: {
    title: 'Title here',
    description: 'Some description here.',
  },
  render: ({ title, description }) => (
    <EmptyState>
      <NoDataIcon />
      <EmptyState.Content description={description} title={title} />
    </EmptyState>
  ),
};
