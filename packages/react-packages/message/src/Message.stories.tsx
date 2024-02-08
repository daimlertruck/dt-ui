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
  },
  render: ({ hasActions, isDismissable, title, description, type }) => (
    <Message isDismissable={isDismissable} type={type}>
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
    isDismissable: true,
    hasActions: true,
    title: 'This is a title',
    description: 'Some important information will appear here.',
    type: OMessageType.Error,
  },
};

export const WithCustomContent: StoryObj<MessageStory> = {
  args: {
    type: OMessageType.Info,
    isDismissable: false,
  },
  render: ({ type, isDismissable }) => (
    <Message isDismissable={isDismissable} type={type}>
      <p>This is a custom and non-dismissable content</p>
    </Message>
  ),
};
