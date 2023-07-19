import React, {
  useState,
  useEffect,
  ChangeEvent,
  useRef,
  InputHTMLAttributes,
} from 'react';

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
  initialValue?: string;
  message?: string | null;
}

export const DatePicker = ({
  hasError: hasErrorProp = false,
  isDisabled,
  label,
  name,
  required,
  style,
  children,
  initialValue,
  message: messageProp = '',
  onChange,
  max,
  min,
  ...rest
}: DatePickerProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState('');
  const [hasError, setHasError] = useState(hasErrorProp);
  const [message, setMessage] = useState(messageProp);
  const id = label.replaceAll(' ', '-');

  useEffect(() => {
    if (!!initialValue) {
      setInputValue(initialValue);
    } else {
      setInputValue('');
    }
  }, [initialValue]);

  useEffect(() => {
    setHasError(hasErrorProp);
    setMessage(messageProp);
  }, [hasErrorProp, messageProp]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    if (onChange) {
      onChange(event);
    }
  };

  const handleFocus = () => {
    if (inputRef?.current?.showPicker) {
      inputRef?.current?.showPicker();
    }
  };

  const handleBlur = (event: ChangeEvent<HTMLInputElement>) => {
    if (!inputRef?.current?.validity.valid) {
      setHasError(true);
      setMessage('Please enter a valid date');
      return;
    }

    if (event.currentTarget.value === '') {
      if (required) {
        setHasError(true);
        setMessage('This field is required.');
      }
    }

    if (required && !!event.currentTarget.value && !hasError) {
      setHasError(false);
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
        value={inputValue}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
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
