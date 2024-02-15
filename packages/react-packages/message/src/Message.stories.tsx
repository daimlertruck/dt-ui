import { Meta, StoryObj } from '@storybook/react';

import { Link, LinkTextSize } from '../../../dt-ui-react/components/link';

import { Message, MessageProps } from './Message';
import { OMessageType } from './types';

interface MessageStory extends MessageProps {
  description?: string;
  hasActions?: boolean;
  title?: string;
}

const meta: Meta<MessageStory> = {
  title: 'Data Display/Message',
  component: Message,
  argTypes: {
    type: {
      options: Object.values(OMessageType),
      control: { type: 'inline-radio' },
    },
    onClose: {
      options: [true, undefined],
      control: {
        type: 'radio',
        labels: {
          true: 'Has onClose',
          undefined: 'Does not have onClose',
        },
      },
    },
  },
  render: ({ hasActions, onClose, title, description, type }) => (
    <Message
      {...(onClose && {
        onClose: () => console.log('closed'),
      })}
      type={type}
    >
      {title ? <Message.Title>{title}</Message.Title> : null}
      {description ? (
        <Message.Description>{description}</Message.Description>
      ) : null}
      {hasActions ? (
        <Message.Action>
          <Link href='#' textSize={LinkTextSize.Small}>
            View action
          </Link>
        </Message.Action>
      ) : null}
    </Message>
  ),
};
export default meta;

export const Default: StoryObj<MessageStory> = {
  args: {
    type: OMessageType.Error,
    hasActions: true,
    title: 'This is a title',
    description: 'Some important information will appear here.',
    onClose: true as unknown as MessageStory['onClose'],
  },
};

export const WithCustomContent: StoryObj<MessageStory> = {
  args: {
    type: OMessageType.Info,
  },
  render: ({ type }) => (
    <Message style={{ alignItems: 'center' }} type={type}>
      <p>This is a custom and non-dismissable content</p>
    </Message>
  ),
};
