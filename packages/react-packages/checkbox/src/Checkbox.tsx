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
  checkboxId?: string | number;
  value?: string;
}

export const Checkbox = ({
  dataTestId = 'checkbox-id',
  onChange,
  checkboxId,
  children,
  isChecked = false,
  isDisabled = false,
  style,
  value,
}: CheckBoxProps) => {
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
    <CheckboxStyled
      data-testid={dataTestId}
      isChecked={isChecked}
      isDisabled={isDisabled}
      style={style}
    >
      <CheckBoxInputWrapper>
        <CheckboxInputStyled
          checked={isChecked}
          data-testid={checkboxId}
          disabled={isDisabled}
          onChange={handleOnChangeTrigger}
          type='checkbox'
          value={value}
        />
        {isChecked ? (
          <Icon code='check' color={theme.palette.content.contrast} />
        ) : null}
      </CheckBoxInputWrapper>
      {children ? (
        <CheckboxLabelStyled isChecked={isChecked} isDisabled={isDisabled}>
          {children}
        </CheckboxLabelStyled>
      ) : null}
    </CheckboxStyled>
  );
};
