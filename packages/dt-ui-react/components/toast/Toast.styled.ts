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
    background-color: ${theme.palette[type]};  
    color: ${theme.colors.white}
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
  animation: ${fadeIn} 0.25s ease-in;
  transition: all 0.25s ease-in-out;
  ${({ theme, isVisible }) => `
    background-color: ${theme.colors.white};  
    opacity: ${isVisible ? 1 : 0};
    color: ${theme.colors.gray_300};  
  `}
`;

export const ToastContentStyled = styled.div`
  height: 100%;
  flex-grow: 1;
  padding: 12px 0;
  margin: 0 24px 0 16px;
`;

export const ToastTitleStyled = styled.div`
  text-transform: uppercase;
  letter-spacing: 0.5px;
  ${({ theme }) => theme.fontStyles.h6};
  margin-bottom: 4px;
`;

export const ToastMessageStyled = styled.div`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  ${({ theme }) => theme.fontStyles.pXXSmall};
`;

export const ToastButtonCloseStyled = styled.button`
  border: 0;
  cursor: pointer;
  background: transparent;
  align-self: flex-start;
  margin-right: 12px;
  margin-top: 12px;
  border-radius: 3px;
  padding: 5px;
  font-size: 0;
  line-height: 0;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray_70};
  }
`;
