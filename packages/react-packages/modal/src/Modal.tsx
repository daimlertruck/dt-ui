import { Backdrop, BackdropProps } from '@dt-ui/react-backdrop';
import { BaseProps, Portal, useClickOutside } from '@dt-ui/react-core';
import { forwardRef, RefObject, useRef } from 'react';

import { ModalContent, ModalFooter, ModalHeader } from './components';
import { ModalStyled } from './Modal.styled';

export interface ModalProps extends BaseProps {
  onClickOutside?: () => void;
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
  onClickOutside,
  style,
  dataTestId,
}: ModalProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useClickOutside({
    ref: ref as RefObject<Element>,
    handler: onClickOutside ?? (() => {}),
  });

  return (
    <ModalStyled data-testid={dataTestId} ref={ref} style={style}>
      {children}
    </ModalStyled>
  );
};

Modal.Header = ModalHeader;
Modal.Content = ModalContent;
Modal.Footer = ModalFooter;
