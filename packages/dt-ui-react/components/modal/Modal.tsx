import { forwardRef, RefObject, useRef } from 'react';

import { CloseIcon } from '../../core/assets';
import { BaseProps } from '../../types';
import useClickOutside from '../../utils/useClickOutside';
import { IconButton } from '../buttons';
import { Portal } from '../Portal';
import { Typography } from '../typography';

import {
  OverlayStyled,
  ContentStyled,
  ModalStyled,
  HeaderStyled,
  FooterStyled,
} from './Modal.styled';

export interface OverlayProps extends BaseProps {
  isOpen: boolean;
}

export interface ModalProps extends BaseProps {
  handleClose: () => void;
  hasClickOutside?: boolean;
}

export interface ModalHeaderProps extends ModalProps {
  isDisabled?: boolean;
}

export interface FooterProps {
  actionDisabled?: boolean;
  actionTitle: string;
  handleAction: () => void;
  handleClose: () => void;
}

export const Overlay = forwardRef<HTMLDivElement, OverlayProps>(
  ({ children, dataTestId, isOpen }, ref) => {
    return (
      <Portal isOpen={isOpen}>
        <OverlayStyled data-testid={dataTestId ?? 'modal'} ref={ref}>
          {children}
        </OverlayStyled>
      </Portal>
    );
  }
);

export const Modal = ({
  children,
  handleClose,
  hasClickOutside = false,
}: ModalProps) => {
  const ref = useRef(null);

  useClickOutside({
    ref: hasClickOutside ? ref : ({} as RefObject<Element>),
    handler: handleClose,
  });

  return <ModalStyled ref={ref}>{children}</ModalStyled>;
};

Modal.Header = ({
  children,
  dataTestId,
  handleClose,
  isDisabled,
}: ModalHeaderProps) => {
  return (
    <HeaderStyled data-testid={dataTestId ?? 'modal-header'}>
      {children}
      <IconButton
        onMouseDown={handleClose}
        isDisabled={isDisabled}
        color='neutralDark_100'
      >
        <CloseIcon />
      </IconButton>
    </HeaderStyled>
  );
};

Modal.ContentTitle = ({ children }: BaseProps) => {
  return (
    <Typography
      style={{
        marginBottom: '8px',
        textTransform: 'none',
        fontWeight: 700,
        wordBreak: 'break-word',
      }}
    >
      {children}
    </Typography>
  );
};

Modal.Content = ({ children }: BaseProps) => {
  return <ContentStyled>{children}</ContentStyled>;
};

Modal.Footer = ({ children, style }: BaseProps) => {
  return <FooterStyled style={style}>{children}</FooterStyled>;
};
