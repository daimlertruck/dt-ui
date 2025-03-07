import { Button } from '@dt-ui/react-button';
import { BaseProps } from '@dt-ui/react-core';
import { RadioGroup } from '@dt-ui/react-radio';
import { Typography } from '@dt-ui/react-typography';
import type { Meta, StoryObj } from '@storybook/react';

import { Card } from '.';

type CardStoryProps = BaseProps & {
  title: string;
  description: string;
  isSelectable: boolean;
  variant: 'vertical' | 'horizontal';
  image?: string;
  selectionType?: 'radio' | 'checkbox';
  onClick?: () => void;
};

const meta: Meta<CardStoryProps> = {
  title: 'Data Display/Card',
  component: Card,
  render: ({ title, description, ...rest }) => {
    return (
      <Card {...rest}>
        <Card.Title>{title}</Card.Title>
        <Card.Detail>
          <Typography color='grey_100'>{description}</Typography>
        </Card.Detail>
        <Card.Actions>
          <Button
            color='secondary'
            dataTestId='cancel'
            onClick={() => null}
            variant='outlined'
          >
            Cancel
          </Button>
          <Button dataTestId='action' onClick={() => null}>
            Action
          </Button>
        </Card.Actions>
      </Card>
    );
  },
};

export default meta;

export const Default: StoryObj<CardStoryProps> = {
  args: {
    title: 'Card Title',
    description: 'This is a short description',
    isSelectable: true,
    variant: 'vertical',
    image: 'https://picsum.photos/360/150',
    selectionType: 'checkbox',
    onClick: () => console.log('Card clicked'),
  },
  argTypes: {
    variant: {
      options: ['vertical', 'horizontal'],
      control: { type: 'select' },
    },
    selectionType: {
      options: ['radio', 'checkbox'],
      control: { type: 'select' },
    },
  },
};

export const WithRadioGroup: StoryObj<CardStoryProps> = {
  args: {
    title: 'Card Title',
    description: 'This is a short description',
    isSelectable: true,
    variant: 'vertical',
    image: 'https://picsum.photos/360/150',
    selectionType: 'radio',
  },
  render: ({ title, description, ...rest }) => {
    return (
      <RadioGroup name='card-radio-group' onChange={() => {}}>
        <Card {...rest}>
          <Card.Title>{title}</Card.Title>
          <Card.Detail>
            <Typography color='grey_100'>{description}</Typography>
          </Card.Detail>
          <Card.Actions>
            <Button
              color='secondary'
              dataTestId='cancel'
              onClick={() => null}
              variant='outlined'
            >
              Cancel
            </Button>
            <Button dataTestId='action' onClick={() => null}>
              Action
            </Button>
          </Card.Actions>
        </Card>
        <Card {...rest}>
          <Card.Title>{title}</Card.Title>
          <Card.Detail>
            <Typography color='grey_100'>{description}</Typography>
          </Card.Detail>
          <Card.Actions>
            <Button
              color='secondary'
              dataTestId='cancel'
              onClick={() => null}
              variant='outlined'
            >
              Cancel
            </Button>
            <Button dataTestId='action' onClick={() => null}>
              Action
            </Button>
          </Card.Actions>
        </Card>
      </RadioGroup>
    );
  },
};
