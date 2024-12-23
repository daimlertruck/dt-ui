import React, {
  useState,
  useEffect,
  ChangeEvent,
  MutableRefObject,
  HTMLInputTypeAttribute,
  ReactNode,
  InputHTMLAttributes,
} from 'react';

import { ErrorIcon } from '../../../core/assets';
import { BaseProps } from '../../../types';
import { Spinner } from '../../spinner';
import { Typography } from '../../typography';
import { LabelField } from '../label-field';

import {
  TextFieldStyled,
  InputFieldStyled,
  InputFieldIconStyled,
  TextFieldMessageStyled,
} from './TextField.styled';

export interface TextFieldProps
  extends BaseProps,
    InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  type?: HTMLInputTypeAttribute;
  hasError?: boolean;
  name?: string;
  required?: boolean;
  initialValue?: string;
  maxLength?: number;
  inputRef?: MutableRefObject<HTMLInputElement>;
  message?: string | ReactNode | null;
  icon?: ReactNode;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const TextField = ({
  hasError: hasErrorProp = false,
  isDisabled,
  isLoading,
  label,
  name,
  required,
  style,
  children,
  initialValue,
  inputRef,
  maxLength,
  message: messageProp = '',
  type = 'text',
  icon,
  onChange = () => null,
  ...rest
}: TextFieldProps) => {
  const [activeInput, setActiveInput] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [hasError, setHasError] = useState(hasErrorProp);
  const [message, setMessage] = useState(messageProp);
  const id = label?.replaceAll(' ', '-') as string;

  useEffect(() => {
    // Check if there's an initial value coming from props
    if (!!initialValue) {
      setActiveInput(true);
      setInputValue(initialValue);
    } else {
      setActiveInput(false);
      setInputValue('');
    }
  }, [initialValue]);

  useEffect(() => {
    setHasError(hasErrorProp);
    setMessage(messageProp);

    if (!inputValue) {
      setHasError(false);
    }
  }, [hasErrorProp, initialValue, messageProp, inputValue]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    if (onChange) {
      onChange(event);
    }
  };

  const onFocus = () => {
    setActiveInput(true);
  };

  const onBlur = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.value === '') {
      setActiveInput(false);

      if (required) {
        setHasError(true);
        setMessage('This field is required.');
      }
    }

    if (required && !!event.currentTarget.value && !hasError) {
      setHasError(false);
    }

    inputValue.length > 0 ? setActiveInput(true) : setActiveInput(false);
  };

  return (
    <TextFieldStyled style={style}>
      {label && (
        <LabelField isActive={activeInput} forId={id} isDisabled={isDisabled}>
          {label} {required && '*'}
        </LabelField>
      )}

      {(hasError || isLoading || !!icon) && (
        <InputFieldIconStyled>
          {hasError && <ErrorIcon />}
          {isLoading && <Spinner spinnerTheme='dark' size='small' />}
          {!isLoading && !!icon && icon}
        </InputFieldIconStyled>
      )}
      <InputFieldStyled
        {...rest}
        disabled={isDisabled}
        ref={inputRef}
        type={type}
        id={id}
        name={name || id}
        hasError={hasError}
        hasLabel={!!label}
        value={inputValue}
        onChange={handleChange}
        onFocus={onFocus}
        onBlur={onBlur}
        required={required}
        maxLength={maxLength}
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
