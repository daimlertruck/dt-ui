import { BaseProps } from '@dt-ui/react-core';
import { Icon } from '@dt-ui/react-icon';
import { useTheme } from '@emotion/react';
import { ChangeEvent } from 'react';

import {
  CheckboxStyled,
  CheckboxInputStyled,
  CheckboxLabelStyled,
  CheckBoxInputWrapper,
} from './Checkbox.styled';

export interface CheckBoxProps extends BaseProps {
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  isChecked?: boolean;
  isDisabled?: boolean;
}

export const Checkbox = ({
  onChange,
  dataTestId,
  children,
  isChecked = false,
  isDisabled = false,
  style,
}: CheckBoxProps) => {
  const checkboxId = dataTestId ?? 'checkbox-id';
  const theme = useTheme();

  const handleOnChangeTrigger = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (isDisabled) {
      return;
    }
    onChange?.(event);
  };

  return (
    <CheckboxStyled isChecked={isChecked} isDisabled={isDisabled} style={style}>
      <CheckBoxInputWrapper>
        <CheckboxInputStyled
          checked={isChecked}
          data-testid={checkboxId}
          disabled={isDisabled}
          id={checkboxId}
          onChange={handleOnChangeTrigger}
          type='checkbox'
        />
        {isChecked ? (
          <Icon code='check' color={theme.palette.content.contrast} />
        ) : null}
      </CheckBoxInputWrapper>
      {children ? (
        <CheckboxLabelStyled
          htmlFor={checkboxId}
          isChecked={isChecked}
          isDisabled={isDisabled}
        >
          {children}
        </CheckboxLabelStyled>
      ) : null}
    </CheckboxStyled>
  );
};
