import { useTheme, Global } from '@emotion/react';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import { CloseIcon } from '../../core';

import {
  DrawerTitle,
  DrawerHeader,
  ScrollEffectContainer,
  DrawerBody,
} from './components';
import {
  GlobalStyle,
  DrawerStyled,
  DrawerBaseProps,
  OverlayStyled,
  MainContainerStyled,
  CloseButtonStyled,
  DrawerInnerContainerStyled,
  CloseButtonContainerStyled,
} from './Drawer.styled';

const animationToMiliseconds = (duration: string) =>
  parseFloat(duration.replace(/[^\d.]/g, '')) * 1000;

export interface DrawerProps extends DrawerBaseProps {
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Drawer = ({
  isVisible,
  setIsVisible,
  children,
  dataTestId,
}: DrawerProps) => {
  const [isTransformed, setIsTransformed] = useState<boolean>(false);
  const refDrawerContainer = useRef<HTMLDivElement>(null);
  const theme = useTheme();

  const handleClose = useCallback(() => setIsVisible(false), [setIsVisible]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    if (isVisible) {
      setIsTransformed(true);
      document.addEventListener('keydown', handleKeyDown);
    } else {
      timeoutId = setTimeout(() => {
        const currentContainer = refDrawerContainer.current;
        if (currentContainer) {
          currentContainer.scrollTop = 0;
        }
        setIsTransformed(false);
        document.removeEventListener('keydown', handleKeyDown);
      }, animationToMiliseconds(theme.animations.emphasizedDecelerate.duration));
    }

    return () => clearTimeout(timeoutId);
  }, [handleClose, isVisible, theme.animations.emphasizedDecelerate.duration]);

  return (
    <MainContainerStyled
      data-testid={dataTestId ?? 'drawer-container'}
      isTransformed={isTransformed}
      isVisible={isVisible}
    >
      {isVisible ? <Global styles={GlobalStyle} /> : null}

      <OverlayStyled
        data-testid='drawer-overlay'
        isVisible={isVisible}
        onClick={handleClose}
      />

      <DrawerStyled isVisible={isVisible}>
        <CloseButtonContainerStyled>
          <CloseButtonStyled
            color='neutralDark_700'
            data-testid='drawer-close-button'
            onClick={handleClose}
          >
            <CloseIcon />
          </CloseButtonStyled>
        </CloseButtonContainerStyled>
        <DrawerInnerContainerStyled ref={refDrawerContainer}>
          {children}
        </DrawerInnerContainerStyled>
      </DrawerStyled>
    </MainContainerStyled>
  );
};

Drawer.Title = DrawerTitle;
Drawer.Header = DrawerHeader;
Drawer.ScrollEffectContainer = ScrollEffectContainer;
Drawer.Body = DrawerBody;
export default Drawer;
