import styled from '@emotion/styled';

import { MessageType, OMessageType } from './types';

interface MessageStyledProps {
  type: MessageType;
}

export const MessageStyled = styled.div<MessageStyledProps>`
  ${({ theme, type }) => `
    padding: ${theme.spacing['3xs']} ${theme.spacing['2xs']};
    background-color: ${
      type === OMessageType.Default
        ? theme.palette.surface.light
        : theme.palette[type].light
    };
    display: flex;
    align-items: flex-start;
    justify-content: center;
    border-radius: ${theme.shape.message};
    border: 1px dashed ${
      type === OMessageType.Default
        ? theme.palette.border.default
        : theme.palette[type].default
    };
    width: 100%;
    height: 100%;
    gap: ${theme.spacing['4xs']};
  `}
`;

export const MessageContentStyled = styled.div`
  ${({ theme }) => `
    display: flex;
    flex-direction: column;
    flex: 1;
    text-align: start;
    gap: ${theme.spacing['6xs']};
  `}
`;

export const MessageActionStyled = styled.div`
  ${({ theme }) => `
    padding-top: ${theme.spacing['4xs']};
  `}
`;

interface MessageIconStyledProps {
  type: MessageType;
}

export const MessageIconStyled = styled.div<MessageIconStyledProps>`
  ${({ theme, type }) => `
    height: 100%;
    display: flex;
    color: ${
      type === 'default'
        ? theme.palette.content.default
        : theme.palette[type].default
    };
  `}
`;

export const MessageButtonCloseStyled = styled.button`
  ${({ theme }) => `
    color: ${theme.palette.content.default};
    border: 0;
    cursor: pointer;
    background: transparent;
    display: flex;
  
    &:hover {
      background-color: ${theme.palette.surface.contrast};
    }
  `}
`;
