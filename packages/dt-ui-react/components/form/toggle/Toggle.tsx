import { ChangeEvent } from 'react';

import { BaseProps, Colors } from '../../../types';
import { Typography } from '../../typography';

import {
  ToggleCheckBoxStyled,
  ToggleSwitchStyled,
  ToggleWrapperStyled,
} from './Toggle.styled';

export interface ToggleProps extends BaseProps {
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  dataTestId?: string;
  isDisabled?: boolean;
  isChecked?: boolean;
  checkedColor?: Colors;
  uncheckedColor?: Colors;
}

export const Toggle = ({
  onChange,
  dataTestId,
  children,
  checkedColor = 'success',
  uncheckedColor = 'neutral',
  isDisabled = false,
  isChecked = false,
}: ToggleProps) => {
  const testId = dataTestId ?? 'toggle';
  const checkboxId = `${testId}-checkbox-id`;

  return (
    <ToggleWrapperStyled data-testid={testId}>
      <ToggleCheckBoxStyled
        checked={isChecked}
        checkedColor={checkedColor}
        disabled={isDisabled}
        id={checkboxId}
        onChange={onChange}
        type='checkbox'
        uncheckedColor={uncheckedColor}
      />
      <ToggleSwitchStyled htmlFor={checkboxId} />
      {children}
    </ToggleWrapperStyled>
  );
};

Toggle.Label = ({ children, dataTestId }: BaseProps) => {
  return (
    <Typography
      color='grey_200'
      data-testid={dataTestId ?? 'toggle-label'}
      dataTestId='toggle-label'
      element='span'
      fontStyles='pXXSmall'
      style={{ fontWeight: 700 }}
    >
      {children}
    </Typography>
  );
};
