import { Children, cloneElement, ReactElement, ReactNode } from 'react';
import {
  toast,
  ToastOptions,
  Toaster as ToastProvider,
  ToasterProps as ToasterProviderProps,
} from 'react-hot-toast';

import { TOAST_Z_INDEX } from '../../constants';
import useMedia from '../../hooks/useMedia';

import { ToastPosition, ToastType } from './constants';
import Toast from './Toast';

const TOAST_SUCCESS_DURATION = 5000;
const TOAST_ERROR_DURATION = Infinity;

export interface EmitToastProps extends ToastOptions {
  type: ToastType;
  title: string;
  message: string;
  children?: ReactNode;
}

export interface ToasterProps extends ToasterProviderProps {
  smallPosition?: ToastPosition;
  defaultPosition?: ToastPosition;
}

export const emitToast = ({
  type,
  title,
  message,
  children,
  duration = type === ToastType.Success
    ? TOAST_SUCCESS_DURATION
    : TOAST_ERROR_DURATION,
  ...props
}: EmitToastProps) => {
  toast.custom(
    (t) => {
      const clonedChildren = Children.map(children as ReactElement, (child) => {
        return (
          child &&
          cloneElement(child, {
            toastId: t.id,
            ...child.props,
          })
        );
      });

      return (
        <Toast
          id={t.id}
          type={type}
          title={title}
          message={message}
          onClose={() => toast.dismiss(t.id)}
          isVisible={t.visible}
        >
          {clonedChildren}
        </Toast>
      );
    },
    {
      duration,
      ...props,
    }
  );
};

const Toaster = ({
  smallPosition = ToastPosition.BottomCenter,
  defaultPosition = ToastPosition.BottomRight,
  gutter = 8,
  ...props
}: ToasterProps) => {
  const small = useMedia('(max-width: 767px)');
  const position = (small ? smallPosition : defaultPosition) ?? props.position;
  const margin = small ? 8 : 16;

  return (
    <>
      <ToastProvider
        gutter={gutter}
        position={position}
        {...props}
        containerStyle={{
          bottom: margin,
          right: margin,
          top: margin,
          left: margin,
          zIndex: TOAST_Z_INDEX,
          ...props.containerStyle,
        }}
      />
    </>
  );
};

export default Toaster;
