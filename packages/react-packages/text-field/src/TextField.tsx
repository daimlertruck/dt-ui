import { Box } from '@dt-ui/react-box';
import { BaseProps } from '@dt-ui/react-core';
import { LabelField } from '@dt-ui/react-label-field';
import { Typography } from '@dt-ui/react-typography';
import {
  useState,
  useEffect,
  ReactNode,
  ComponentPropsWithoutRef,
  RefObject,
  FocusEvent,
  ChangeEvent,
} from 'react';

import {
  TextFieldStyled,
  InputFieldStyled,
  TextFieldMessageStyled,
  InputExtraPrefixStyled,
  InputExtraSuffixStyled,
} from './TextField.styled';

export interface TextFieldProps
  extends ComponentPropsWithoutRef<'input'>,
    BaseProps {
  label: string;
  isFloatingLabel?: boolean;
  extraPrefix?: ReactNode;
  extraSuffix?: ReactNode;
  hasError?: boolean;
  requiredMessage?: string;
  initialValue?: string;
  inputRef?: RefObject<HTMLInputElement>;
  message?: string;
  variant?: 'outlined' | 'bottomLine';
}

export const TextField = ({
  hasError = false,
  extraPrefix,
  extraSuffix,
  label,
  isFloatingLabel = true,
  name,
  required,
  requiredMessage,
  style,
  children,
  initialValue,
  inputRef,
  message: messageProp = '',
  type = 'text',
  variant = 'outlined',
  disabled = false,
  onChange = () => null,
  ...rest
}: TextFieldProps) => {
  const [activeInput, setActiveInput] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [hasRequiredError, setHasRequiredError] = useState(false);
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

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setHasRequiredError(false);

    if (onChange) {
      onChange(event);
    }
  };

  const onFocus = (event: FocusEvent<HTMLInputElement>) => {
    setActiveInput(true);

    if (rest.onFocus) {
      rest.onFocus(event);
    }
  };

  const onBlur = (event: FocusEvent<HTMLInputElement>) => {
    const isEmptyOrOnlySpaces = event.currentTarget.value.trim().length === 0;
    if (isEmptyOrOnlySpaces) {
      setActiveInput(false);

      if (required && requiredMessage) {
        setHasRequiredError(true);
      }
    }

    inputValue.length > 0 ? setActiveInput(true) : setActiveInput(false);

    if (rest.onBlur) {
      rest.onBlur(event);
    }
  };

  const messageColor = disabled ? 'content.light' : 'content.medium';
  const showError = hasError || hasRequiredError;
  const message = hasRequiredError
    ? requiredMessage ?? messageProp
    : messageProp;

  return (
    <TextFieldStyled
      hasPrefix={!!extraPrefix}
      isFloatingLabel={isFloatingLabel}
      style={style}
    >
      <LabelField
        hasError={showError}
        htmlFor={id}
        isActive={activeInput || type === 'date'}
        isDisabled={disabled}
        isFloating={isFloatingLabel}
        isRequired={required}
      >
        {label}
      </LabelField>

      <Box style={{ flexDirection: 'row' }}>
        {extraPrefix ? (
          <InputExtraPrefixStyled isFloatingLabel={isFloatingLabel}>
            {extraPrefix}
          </InputExtraPrefixStyled>
        ) : null}

        <InputFieldStyled
          data-error={showError}
          disabled={disabled}
          id={id}
          isFloatingLabel={isFloatingLabel}
          name={name ?? id}
          ref={inputRef}
          type={type}
          value={inputValue}
          variant={variant}
          {...rest}
          onBlur={onBlur}
          onChange={handleChange}
          onFocus={onFocus}
        />
        {extraSuffix ? (
          <InputExtraSuffixStyled>{extraSuffix}</InputExtraSuffixStyled>
        ) : null}
      </Box>

      {message ? (
        <TextFieldMessageStyled>
          <Typography
            color={showError ? 'error.default' : messageColor}
            element='span'
            fontStyles='body3'
          >
            {message}
          </Typography>
        </TextFieldMessageStyled>
      ) : null}
      {children}
    </TextFieldStyled>
  );
};
