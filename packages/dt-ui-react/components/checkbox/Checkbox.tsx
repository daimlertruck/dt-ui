import { ChangeEvent } from 'react';

import { BaseProps } from '../../types';
import { Box } from '../box';

import { CheckboxInputStyled, CheckboxLabelStyled } from './CheckBox.styled';

export interface CheckBoxProps extends BaseProps {
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  isChecked?: boolean;
  isDisabled?: boolean;
}

const CheckBox = ({
  onChange,
  dataTestId,
  children,
  isChecked = false,
  isDisabled = false,
}: CheckBoxProps) => {
  const checkboxId = dataTestId ?? 'checkbox-id';

  return (
    <Box style={{ flexDirection: 'row' }}>
      <CheckboxInputStyled
        id={checkboxId}
        type='checkbox'
        checked={isChecked}
        disabled={isDisabled}
        data-testid={checkboxId}
        onChange={onChange}
      />
      <CheckboxLabelStyled htmlFor={checkboxId}>{children}</CheckboxLabelStyled>
    </Box>
  );
};

export default CheckBox;
