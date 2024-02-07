import { DRAWER_Z_INDEX, BaseProps } from '@dt-ui/react-core';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { IconButtonStyled } from '../buttons/icon-button/IconButton.styled';

export interface DrawerBaseProps extends BaseProps {
  isVisible: boolean;
}

interface DrawerStyledProps extends DrawerBaseProps {
  isTransformed: boolean;
}

export const GlobalStyle = css`
  body {
    overflow: hidden;
  }
`;

export const MainContainerStyled = styled.div<DrawerStyledProps>`
  ${({ isVisible, isTransformed }) => css`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: ${DRAWER_Z_INDEX};
    ${isVisible && 'transform: translateX(0);'}
    ${!isTransformed && 'transform: translateX(100%);'}
  `}
`;

export const OverlayStyled = styled.div<DrawerBaseProps>`
  ${({ theme, isVisible }) => `
    width: 100%;
    height: 100vh;
    position: absolute;
    background-color: ${theme.palette.base.dark};
    opacity: ${isVisible ? 0.2 : 0};
    transition: opacity ${theme.animations.emphasizedDecelerate.duration}
      ${theme.animations.emphasizedDecelerate.timingFunction};
  `}
`;

export const DrawerStyled = styled.div<DrawerBaseProps>`
  ${({ theme, isVisible }) => `
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    background-color: ${theme.palette.base.default};
    transform: ${isVisible ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform ${theme.animations.emphasizedDecelerate.duration}
      ${theme.animations.emphasizedDecelerate.timingFunction};

    @media only screen and (min-width: ${theme.breakpoints.s}) {
      width: 500px;
      border-radius: ${theme.radius['3xs']} ${theme.radius.none}
        ${theme.radius.none} ${theme.radius['3xs']};
      box-shadow: ${theme.shadows.s};
    }
  `}
`;

export const DrawerInnerContainerStyled = styled.div`
  position: relative;
  height: 100%;
  overflow: auto;
`;

export const CloseButtonContainerStyled = styled.div`
  ${({ theme }) => `
    width: 100%;
    padding: ${theme.spacing.xs};
    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media only screen and (min-width: ${theme.breakpoints.s}) {
      padding: ${theme.spacing.s};
    }
  `}
`;

export const CloseButtonStyled = styled(IconButtonStyled)`
  ${({ theme }) => `
    color: ${theme.palette.content.body};
  `}
`;
