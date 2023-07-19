import { ReactNode } from 'react';
import {
  toast,
  ToastOptions,
  Toaster as ToastProvider,
  ToasterProps as ToasterProviderProps,
} from 'react-hot-toast';

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
      return (
        <Toast
          id={t.id}
          type={type}
          title={title}
          message={message}
          onClose={() => toast.dismiss(t.id)}
          isVisible={t.visible}
        >
          {children}
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
          ...props.containerStyle,
        }}
      />
    </>
  );
};

export default Toaster;
