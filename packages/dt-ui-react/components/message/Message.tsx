import { useState, SVGProps, ReactElement } from 'react';

import {
  CheckCircleIcon,
  CloseIcon,
  ErrorIcon,
  InfoIcon,
  WarningOutlinedIcon,
} from '../../core';
import { BaseProps } from '../../types';
import { Typography } from '../typography';

import {
  MessageStyled,
  MessageIconStyled,
  MessageButtonCloseStyled,
  MessageContentStyled,
  MessageActionStyled,
} from './Message.styled';
import { MessageType } from './types';

export interface MessageProps extends BaseProps {
  type: MessageType;
  isDismissable?: boolean;
}

type MessageIcon = (props: SVGProps<SVGSVGElement>) => ReactElement;

export const MessageIcons: Record<MessageType, MessageIcon | null> = {
  [MessageType.Error]: ErrorIcon,
  [MessageType.Info]: InfoIcon,
  [MessageType.Success]: CheckCircleIcon,
  [MessageType.Warning]: WarningOutlinedIcon,
  [MessageType.Default]: null,
};

export const Message = ({
  children,
  dataTestId,
  type,
  isDismissable = true,
}: MessageProps) => {
  const [isDismissed, setIsDismissed] = useState(false);
  const Icon = MessageIcons[type];

  const handleDismiss = () => {
    setIsDismissed(true);
  };

  if (isDismissed) return null;

  return (
    <MessageStyled data-testid={dataTestId ?? 'message'} type={type}>
      {!!Icon ? (
        <MessageIconStyled type={type}>
          <Icon data-testid='message-icon' height='16px' width='16px' />
        </MessageIconStyled>
      ) : null}
      <MessageContentStyled>{children}</MessageContentStyled>
      {isDismissable ? (
        <MessageButtonCloseStyled onClick={handleDismiss}>
          <CloseIcon height='16px' width='16px' />
        </MessageButtonCloseStyled>
      ) : null}
    </MessageStyled>
  );
};

Message.Title = ({ children }: BaseProps) => {
  return (
    <Typography color='content.heading' element='h2' fontStyles='body2Bold'>
      {children}
    </Typography>
  );
};

Message.Description = ({ children }: BaseProps) => {
  return (
    <Typography color='content.body' fontStyles='body3'>
      {children}
    </Typography>
  );
};

Message.Action = ({ children, dataTestId }: BaseProps) => (
  <MessageActionStyled data-testid={dataTestId ?? 'message-action'}>
    {children}
  </MessageActionStyled>
);
