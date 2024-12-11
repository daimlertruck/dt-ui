import { useRef, InputHTMLAttributes } from 'react';

import { BaseProps } from '../../../types';
import { Typography } from '../../typography';
import { LabelField } from '../label-field';
import {
  TextFieldStyled,
  InputFieldStyled,
  TextFieldMessageStyled,
} from '../text-field/TextField.styled';

export interface DatePickerProps
  extends BaseProps,
    Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'style'> {
  label: string;
  isDisabled?: boolean;
  hasError?: boolean;
  value?: string;
  message?: string | null;
  errorMessage?: string | null;
}

export const DatePicker = ({
  hasError = false,
  isDisabled,
  label,
  name,
  required,
  style,
  children,
  value,
  message = '',
  onChange,
  max,
  min,
  ...rest
}: DatePickerProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const id = label.replaceAll(' ', '-');

  const handleFocus = () => {
    if (inputRef?.current?.showPicker) {
      inputRef?.current?.showPicker();
    }
  };

  return (
    <TextFieldStyled style={style}>
      <LabelField isActive={true} forId={id} isDisabled={isDisabled}>
        {label} {required && '*'}
      </LabelField>
      <InputFieldStyled
        disabled={isDisabled}
        ref={inputRef}
        type='date'
        max={max}
        min={min}
        id={id}
        name={name || id}
        hasError={hasError}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        {...rest}
      />
      {message && (
        <TextFieldMessageStyled>
          <Typography
            element='span'
            fontStyles='pXXSmall'
            color={hasError ? 'red_100' : 'gray_100'}
          >
            {message}
          </Typography>
        </TextFieldMessageStyled>
      )}
      {children}
    </TextFieldStyled>
  );
};
