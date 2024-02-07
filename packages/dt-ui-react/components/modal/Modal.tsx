import { Backdrop, BackdropProps } from '@dt-ui/react-backdrop';
import { BaseProps, useClickOutside, Portal } from '@dt-ui/react-core';
import { forwardRef, RefObject, useRef } from 'react';

import { CloseIcon } from '../../core/assets';
import { IconButton } from '../buttons';
import { Spinner } from '../spinner';
import { Typography } from '../typography';

import {
  ContentStyled,
  ModalStyled,
  HeaderStyled,
  FooterStyled,
  HeaderWrapperStyled,
  ModalLoadingOverlay,
} from './Modal.styled';

export interface ModalProps extends BaseProps {
  handleClose: () => void;
  hasClickOutside?: boolean;
  isLoading?: boolean;
}
export interface ModalHeaderProps extends ModalProps {
  hasBackgroundColor?: boolean;
  hasBorder?: boolean;
  title: string;
  subTitle?: string;
  closeIconLabel?: string;
}

export interface ModalFooterProps extends BaseProps {
  hasBackgroundColor?: boolean;
  hasBorder?: boolean;
}

export const Overlay = forwardRef<HTMLDivElement, BackdropProps>(
  ({ children, dataTestId, isOpen, type }, ref) => {
    return (
      <Portal isOpen={isOpen}>
        <Backdrop dataTestId={dataTestId} isOpen={isOpen} ref={ref} type={type}>
          {children}
        </Backdrop>
      </Portal>
    );
  }
);
export const Modal = ({
  children,
  handleClose,
  hasClickOutside = false,
  isLoading = false,
}: ModalProps) => {
  const ref = useRef(null);

  useClickOutside({
    ref: hasClickOutside && !isLoading ? ref : ({} as RefObject<Element>),
    handler: handleClose,
  });

  return (
    <ModalStyled ref={ref}>
      {isLoading ? (
        <ModalLoadingOverlay>
          <Spinner size='extra-large' />
        </ModalLoadingOverlay>
      ) : null}
      {children}
    </ModalStyled>
  );
};

Modal.Header = ({
  dataTestId,
  handleClose,
  hasBackgroundColor = false,
  hasBorder = false,
  title,
  subTitle,
}: ModalHeaderProps) => {
  return (
    <HeaderStyled
      data-testid={dataTestId ?? 'modal-header'}
      hasBackgroundColor={hasBackgroundColor}
      hasBorder={hasBorder}
    >
      <HeaderWrapperStyled>
        <Typography color='content.heading' element='h4' fontStyles='h4'>
          {title}
        </Typography>

        <IconButton
          ariaLabel='close modal'
          color='default'
          onMouseDown={handleClose}
        >
          <CloseIcon />
        </IconButton>
      </HeaderWrapperStyled>
      {subTitle ? (
        <Typography color='content.body' element='h5' fontStyles='body1'>
          {subTitle}
        </Typography>
      ) : null}
    </HeaderStyled>
  );
};

Modal.Content = ({ children }: BaseProps) => {
  return <ContentStyled>{children}</ContentStyled>;
};

Modal.Footer = ({
  children,
  style,
  hasBackgroundColor = false,
  hasBorder = false,
}: ModalFooterProps) => {
  return (
    <FooterStyled
      hasBackgroundColor={hasBackgroundColor}
      hasBorder={hasBorder}
      style={style}
    >
      {children}
    </FooterStyled>
  );
};
