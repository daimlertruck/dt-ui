import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import { ToastType } from './constants';

interface ToastStyledProps {
  type: ToastType;
  isVisible: boolean;
}

interface ToastIconStyledProps {
  type: ToastType;
}

export const ToastIconStyled = styled.div<ToastIconStyledProps>`
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 8px;
  padding-right: 8px;
  ${({ theme, type }) => `
    background-color: ${theme.palette[type].default};  
    color: ${theme.palette[type].contrast}
`}
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

export const ToastStyled = styled.div<ToastStyledProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 335px;
  animation: ${fadeIn} 0.75s ease-in;
  transition: all 0.75s ease-in-out;
  overflow: hidden;
  ${({ theme, isVisible }) => `
    background-color: ${theme.palette.base.default};  
    opacity: ${isVisible ? 1 : 0};
    color: ${theme.palette.content.body};
    border-radius: ${theme.radius['5xs']};
    box-shadow: ${theme.shadows.s};
  `}
`;

export const ToastContentStyled = styled.div`
  ${({ theme }) => `
    height: 100%;
    flex-grow: 1;
    padding: ${theme.spacing['2xs']} ${theme.spacing['2xs']};
  `}
`;

export const ToastTitleStyled = styled.div`
  ${({ theme }) => `
      ${theme.fontStyles.h5};
      color: ${theme.palette.content.heading};
      margin-bottom: ${theme.spacing['5xs']};
      text-transform: capitalize;
  `}
`;

export const ToastMessageStyled = styled.div`
  ${({ theme }) => `
    ${theme.fontStyles.body2};
    color: ${theme.palette.content.body};
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  `}
`;

export const ToastButtonCloseStyled = styled.button`
  ${({ theme }) => `
    color: ${theme.palette.content.body};
    border: 0;
    cursor: pointer;
    background: transparent;
    align-self: flex-start;
    font-size: 0;
    line-height: 0;
  
    &:hover {
      background-color: ${theme.palette.base.light};
    }
  `}
`;

interface ToastTextContainerProps {
  hasCloseButton: boolean;
}

export const ToastTextContainer = styled.div<ToastTextContainerProps>`
  ${({ theme, hasCloseButton }) => `
    display: grid;
    ${
      hasCloseButton
        ? 'grid-template-columns: auto 1fr;'
        : 'grid-template-rows: auto auto;'
    }
    column-gap: ${theme.spacing['2xs']};
  `}
`;

interface ToastActionsProps {
  hasChildren: boolean;
}

export const ToastActionsStyled = styled.div<ToastActionsProps>`
  ${({ theme, hasChildren }) => `
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding-top: ${hasChildren ? theme.spacing['5xs'] : 0};
  `}
`;
