import { ChangeEvent } from 'react';

import { BaseProps, AlphaColors } from '../../../types';
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
  checkedColor?: AlphaColors;
  uncheckedColor?: AlphaColors;
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
        disabled={isDisabled}
        id={checkboxId}
        type='checkbox'
        checkedColor={checkedColor}
        uncheckedColor={uncheckedColor}
        checked={isChecked}
        onChange={onChange}
      />
      <ToggleSwitchStyled htmlFor={checkboxId} />
      {children}
    </ToggleWrapperStyled>
  );
};

Toggle.Label = ({ children, dataTestId }: BaseProps) => {
  return (
    <Typography
      data-testid={dataTestId ?? 'toggle-label'}
      element='span'
      fontStyles='pXXSmall'
      color='gray_200'
      style={{ fontWeight: 700 }}
      dataTestId='toggle-label'
    >
      {children}
    </Typography>
  );
};
