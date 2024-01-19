import { Box } from '@dt-ui/react-box';
import { ChangeEvent } from 'react';

import { BaseProps } from '../../types';

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
