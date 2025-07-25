import { BaseProps } from '@dt-ui/react-core';
import { Typography } from '@dt-ui/react-typography';
import type { Meta, StoryObj } from '@storybook/react';

import { Card } from '.';

type CardStoryProps = BaseProps & {
  title: string;
  description: string;
};

const meta: Meta<CardStoryProps> = {
  title: 'Data Display/Card',
  component: Card,
  render: ({ title, description }) => {
    return (
      <Card>
        <Card.Title>{title}</Card.Title>
        <Card.Detail>
          <Typography color='grey_100'>{description}</Typography>
        </Card.Detail>
      </Card>
    );
  },
};

export default meta;

export const Default: StoryObj<CardStoryProps> = {
  args: {
    title: 'Card Title',
    description: 'This is a short description',
  },
};
