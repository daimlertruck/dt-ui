import { Backdrop, BackdropProps } from '@dt-ui/react-backdrop';
import { BaseProps, Portal, useClickOutside } from '@dt-ui/react-core';
import { forwardRef, RefObject, useRef } from 'react';

import {
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalLoadingOverlay,
} from './components';
import { ModalStyled } from './Modal.styled';

export interface ModalProps extends BaseProps {
  handleClose: () => void;
  hasClickOutside?: boolean;
  isLoading?: boolean;
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
      {isLoading ? <ModalLoadingOverlay /> : null}
      {children}
    </ModalStyled>
  );
};

Modal.Header = ModalHeader;
Modal.Content = ModalContent;
Modal.Footer = ModalFooter;
