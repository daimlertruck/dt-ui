import { ChangeEvent, InputHTMLAttributes, useState } from 'react';

import { ErrorIcon } from '../../../core/assets';
import { Box } from '../../box';
import { Typography } from '../../typography';
import { LabelField } from '../label-field';

import {
  InputFieldIconStyled,
  TextAreaStyled,
  TextAreaWrapper,
} from './TextArea.styled';

type TextAreaChangeEvent = (e: ChangeEvent<HTMLTextAreaElement>) => void;

export interface TextAreaProps
  extends InputHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  name?: string;
  maxLength?: number;
  dataTestId?: string;
  value?: string;
  required?: boolean;
  helperText?: string;
  hasError?: boolean;
  onChange: TextAreaChangeEvent;
  onFocus?: TextAreaChangeEvent;
  onBlur?: TextAreaChangeEvent;
}

const TextArea = ({
  label,
  onChange,
  dataTestId,
  name,
  value = '',
  required,
  helperText,
  hasError = false,
  maxLength,
  onFocus,
  onBlur,
  ...rest
}: TextAreaProps) => {
  const valueLength = value.length;
  const hasChars = valueLength > 0;

  const [activeInput, setActiveInput] = useState(hasChars);

  const handleFocus = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setActiveInput(true);
    onFocus && onFocus(e);
  };
  const handleBlur = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setActiveInput(hasChars);
    onBlur && onBlur(e);
  };

  const testId =
    dataTestId ?? `${label?.replaceAll(' ', '-').toLocaleLowerCase()}-textarea`;

  return (
    <TextAreaWrapper data-testid={testId}>
      {label && (
        <LabelField isActive={activeInput} forId={testId}>
          {label} {required && '*'}
        </LabelField>
      )}
      {hasError && (
        <InputFieldIconStyled>{hasError && <ErrorIcon />}</InputFieldIconStyled>
      )}
      <TextAreaStyled
        value={value}
        name={name || testId}
        id={testId}
        onFocus={handleFocus}
        onChange={onChange}
        onBlur={handleBlur}
        maxLength={maxLength}
        hasError={hasError}
        {...rest}
      />
      <Box
        style={{
          paddingLeft: 15,
          gap: 16,
          alignItems: 'baseline',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <Typography
          element='span'
          fontStyles='pXSmall'
          color={hasError ? 'red_100' : 'gray_100'}
        >
          {helperText}
        </Typography>

        {maxLength && (
          <Typography
            style={{ whiteSpace: 'nowrap' }}
            element='span'
            fontStyles='pXSmall'
            color='gray_100'
          >
            {maxLength - valueLength} Characters
          </Typography>
        )}
      </Box>
    </TextAreaWrapper>
  );
};

export default TextArea;
