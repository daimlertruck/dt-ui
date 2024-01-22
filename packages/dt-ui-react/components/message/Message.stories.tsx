import { StoryFn } from '@storybook/react';

import { Link, LinkTextSize } from '../link';

import { Message } from './Message';
import { MessageType } from './types';

export default {
  title: 'Data Display/Message',
  component: Message,
};

const Template: StoryFn = ({ title, description, type }) => {
  return (
    <Message type={type}>
      <Message.Title>{title}</Message.Title>
      <Message.Description>{description}</Message.Description>
      <Message.Action>
        <Link href='#' textSize={LinkTextSize.Small}>
          View action
        </Link>
      </Message.Action>
    </Message>
  );
};

export const Default = Template.bind({});

Default.args = {
  title: 'This is a title',
  description: 'Some important information will appear here.',
  type: MessageType.Error,
};

const TemplateWithCustomContent: StoryFn = ({ type, isDismissable }) => {
  return (
    <Message isDismissable={isDismissable} type={type}>
      <p>This is a custom and non-dismissable content</p>
    </Message>
  );
};

export const WithCustomContent = TemplateWithCustomContent.bind({});

WithCustomContent.args = {
  type: MessageType.Info,
  isDismissable: false,
};
