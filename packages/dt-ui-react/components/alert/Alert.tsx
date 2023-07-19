import { WarningIcon, InfoIcon, ErrorIcon } from '../../core/assets/svgs';
import { BaseProps } from '../../types';

import {
  AlertContentStyled,
  AlertIconStyled,
  AlertStyled,
} from './Alert.styled';
import { AlertType } from './constants';

export interface AlertProps extends BaseProps {
  type: AlertType;
}

const AlertIcons = {
  [AlertType.Error]: ErrorIcon,
  [AlertType.Warning]: WarningIcon,
  [AlertType.Info]: InfoIcon,
};

const Alert = ({ children, dataTestId, type, style }: AlertProps) => {
  const Icon = AlertIcons[type];
  const testId = dataTestId ?? 'alert';

  return (
    <AlertStyled data-testid={testId} type={type} style={style}>
      <AlertIconStyled type={type}>
        <Icon />
      </AlertIconStyled>
      <AlertContentStyled>{children}</AlertContentStyled>
    </AlertStyled>
  );
};

export default Alert;
