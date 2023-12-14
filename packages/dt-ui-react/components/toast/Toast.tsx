import {
  InfoOutlineIcon,
  ErrorOutlineIcon,
  CheckCircleOutlineIcon,
  WarningIcon,
  CloseIcon,
} from '../../core/assets/svgs';
import { BaseProps } from '../../types';

import { ToastType } from './constants';
import {
  ToastActionsStyled,
  ToastButtonCloseStyled,
  ToastContentStyled,
  ToastIconStyled,
  ToastMessageStyled,
  ToastStyled,
  ToastTextContainer,
  ToastTitleStyled,
} from './Toast.styled';

export interface ToastProps extends BaseProps {
  id: string;
  type: ToastType;
  title: string;
  message: string;
  onClose: () => void;
  isVisible?: boolean;
  dismissible?: boolean;
}

const ToastIcons = {
  [ToastType.Success]: CheckCircleOutlineIcon,
  [ToastType.Error]: ErrorOutlineIcon,
  [ToastType.Info]: InfoOutlineIcon,
  [ToastType.Warning]: WarningIcon,
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
  dismissible = true,
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
        <ToastTextContainer hasCloseButton={dismissible}>
          <ToastTitleStyled>{title}</ToastTitleStyled>
          {dismissible && (
            <ToastButtonCloseStyled onClick={onClose}>
              <CloseIcon />
            </ToastButtonCloseStyled>
          )}
          <ToastMessageStyled>{message}</ToastMessageStyled>
        </ToastTextContainer>
        <ToastActionsStyled hasChildren={Boolean(children)}>
          {children}
        </ToastActionsStyled>
      </ToastContentStyled>
    </ToastStyled>
  );
};

export default Toast;
