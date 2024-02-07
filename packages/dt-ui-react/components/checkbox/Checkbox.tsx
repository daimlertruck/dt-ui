import { Box } from '@dt-ui/react-box';
import { BaseProps } from '@dt-ui/react-core';
import { ChangeEvent } from 'react';

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
        checked={isChecked}
        data-testid={checkboxId}
        disabled={isDisabled}
        id={checkboxId}
        onChange={onChange}
        type='checkbox'
      />
      <CheckboxLabelStyled htmlFor={checkboxId}>{children}</CheckboxLabelStyled>
    </Box>
  );
};

export default CheckBox;
