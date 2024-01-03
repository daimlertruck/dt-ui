import { forwardRef, RefObject, useRef } from 'react';

import { CloseIcon } from '../../core/assets';
import { BaseProps } from '../../types';
import useClickOutside from '../../utils/useClickOutside';
import { Backdrop, BackdropProps } from '../backdrop';
import { IconButton } from '../buttons';
import { Portal } from '../Portal';
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
        <Backdrop type={type} isOpen={isOpen} dataTestId={dataTestId} ref={ref}>
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
      {isLoading && (
        <ModalLoadingOverlay>
          <Spinner size='extra-large' />
        </ModalLoadingOverlay>
      )}
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
      hasBackgroundColor={hasBackgroundColor}
      hasBorder={hasBorder}
      data-testid={dataTestId ?? 'modal-header'}
    >
      <HeaderWrapperStyled>
        <Typography fontStyles='h4' element='h4' color='textPrimary'>
          {title}
        </Typography>

        <IconButton
          onMouseDown={handleClose}
          color='neutralDark_700'
          ariaLabel='close modal'
        >
          <CloseIcon />
        </IconButton>
      </HeaderWrapperStyled>
      {subTitle && (
        <Typography fontStyles='body1' element='h5' color='textSecondary'>
          {subTitle}
        </Typography>
      )}
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
      hasBorder={hasBorder}
      hasBackgroundColor={hasBackgroundColor}
      style={style}
    >
      {children}
    </FooterStyled>
  );
};
