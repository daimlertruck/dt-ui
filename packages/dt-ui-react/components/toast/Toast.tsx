import {
  InfoOutlineIcon,
  ErrorOutlineIcon,
  CheckCircleOutlineIcon,
} from '../../core/assets/svgs';
import CloseIcon from '../../core/assets/svgs/Close';
import { BaseProps } from '../../types';

import { ToastType } from './constants';
import {
  ToastButtonCloseStyled,
  ToastContentStyled,
  ToastIconStyled,
  ToastMessageStyled,
  ToastStyled,
  ToastTitleStyled,
} from './Toast.styled';

export interface ToastProps extends BaseProps {
  id: string;
  type: ToastType;
  title: string;
  message: string;
  onClose: () => void;
  isVisible?: boolean;
}

const ToastIcons = {
  [ToastType.Success]: CheckCircleOutlineIcon,
  [ToastType.Error]: ErrorOutlineIcon,
  [ToastType.Info]: InfoOutlineIcon,
};

const Toast = ({
  children,
  id,
  dataTestId,
  title,
  message,
  onClose,
  type,
  isVisible = true,
}: ToastProps) => {
  const Icon = ToastIcons[type];
  const dataTest = dataTestId ?? `toast-${id}`;

  return (
    <ToastStyled
      data-testid={dataTest}
      key={id}
      type={type}
      isVisible={isVisible}
    >
      <ToastIconStyled type={type}>
        <Icon />
      </ToastIconStyled>
      <ToastContentStyled>
        <ToastTitleStyled>{title}</ToastTitleStyled>
        <ToastMessageStyled>{message}</ToastMessageStyled>
        {children}
      </ToastContentStyled>
      <ToastButtonCloseStyled onClick={onClose}>
        <CloseIcon />
      </ToastButtonCloseStyled>
    </ToastStyled>
  );
};

export default Toast;
