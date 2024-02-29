import { BaseProps } from '@dt-ui/react-core';
import { LabelField } from '@dt-ui/react-label-field';
import React, {
  useState,
  useEffect,
  ChangeEvent,
  useRef,
  InputHTMLAttributes,
} from 'react';

import { Typography } from '../../typography';
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
      <LabelField forId={id} isActive isDisabled={isDisabled}>
        {label} {required ? '*' : null}
      </LabelField>
      <InputFieldStyled
        disabled={isDisabled}
        hasError={hasError}
        id={id}
        max={max}
        min={min}
        name={name || id}
        onBlur={handleBlur}
        onChange={handleChange}
        onFocus={handleFocus}
        ref={inputRef}
        type='date'
        value={inputValue}
        {...rest}
      />
      {message ? (
        <TextFieldMessageStyled>
          <Typography
            color={hasError ? 'error.default' : 'content.secondary'}
            element='span'
            fontStyles='pXXSmall'
          >
            {message}
          </Typography>
        </TextFieldMessageStyled>
      ) : null}
      {children}
    </TextFieldStyled>
  );
};
