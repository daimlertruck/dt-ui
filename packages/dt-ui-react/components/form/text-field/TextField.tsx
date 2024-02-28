import { BaseProps } from '@dt-ui/react-core';
import { LabelField } from '@dt-ui/react-label-field';
import { Spinner } from '@dt-ui/react-spinner';
import { Typography } from '@dt-ui/react-typography';
import React, {
  useState,
  useEffect,
  ChangeEvent,
  MutableRefObject,
  HTMLInputTypeAttribute,
  ReactNode,
} from 'react';

import { ErrorIcon } from '../../../core/assets';

import {
  TextFieldStyled,
  InputFieldStyled,
  InputFieldIconStyled,
  TextFieldMessageStyled,
} from './TextField.styled';

export interface TextFieldProps extends BaseProps {
  label: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  type?: HTMLInputTypeAttribute;
  hasError?: boolean;
  name?: string;
  required?: boolean;
  initialValue?: string;
  maxLength?: number;
  inputRef?: MutableRefObject<HTMLInputElement>;
  message?: string | null;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  icon?: ReactNode;
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
}: TextFieldProps) => {
  const [activeInput, setActiveInput] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [hasError, setHasError] = useState(hasErrorProp);
  const [message, setMessage] = useState(messageProp);
  const id = label.replaceAll(' ', '-');

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
      <LabelField forId={id} isActive={activeInput} isDisabled={isDisabled}>
        {label} {required ? '*' : null}
      </LabelField>

      {hasError || isLoading || !!icon ? (
        <InputFieldIconStyled>
          {hasError ? <ErrorIcon /> : null}
          {isLoading ? <Spinner colorScheme='negative' size='small' /> : null}
          {!isLoading && !!icon && icon}
        </InputFieldIconStyled>
      ) : null}
      <InputFieldStyled
        disabled={isDisabled}
        hasError={hasError}
        id={id}
        maxLength={maxLength}
        name={name || id}
        onBlur={onBlur}
        onChange={handleChange}
        onFocus={onFocus}
        ref={inputRef}
        required={required}
        type={type}
        value={inputValue}
      />
      {message ? (
        <TextFieldMessageStyled>
          <Typography
            color={hasError ? 'error.default' : 'content.body'}
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
