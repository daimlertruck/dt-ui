import { BaseProps } from '@dt-ui/react-core';

import {
  InfoOutlineIcon,
  ErrorOutlineIcon,
  CheckCircleOutlineIcon,
  WarningOutlineIcon,
  CloseIcon,
} from '../../../dt-ui-react/core';

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
  [ToastType.Warning]: WarningOutlineIcon,
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
      isVisible={isVisible}
      key={id}
      type={type}
    >
      <ToastIconStyled type={type}>
        <Icon height={20} width={20} />
      </ToastIconStyled>
      <ToastContentStyled>
        <ToastTextContainer hasCloseButton={dismissible}>
          <ToastTitleStyled>{title}</ToastTitleStyled>
          {dismissible ? (
            <ToastButtonCloseStyled onClick={onClose}>
              <CloseIcon />
            </ToastButtonCloseStyled>
          ) : null}
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
