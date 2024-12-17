import { ChangeEvent, useEffect, useState } from 'react';

import { ErrorIcon } from '../../../core/assets';
import { Box } from '../../box';
import { Typography } from '../../typography';
import { LabelField } from '../label-field';

import {
  InputFieldIconStyled,
  TextAreaStyled,
  TextAreaWrapper,
} from './TextArea.styled';

export interface TextAreaProps {
  label: string;
  name?: string;
  maxLength?: number;
  dataTestId?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  helperText?: string;
  hasError?: boolean;
}

const TextArea = ({
  label,
  onChange,
  dataTestId,
  name,
  value,
  required,
  helperText,
  hasError = false,
  maxLength = 120,
}: TextAreaProps) => {
  const [chars, setChars] = useState(0);
  const [activeInput, setActiveInput] = useState(false);

  const handleFocus = () => setActiveInput(true);
  const handleBlur = () =>
    chars > 0 ? setActiveInput(true) : setActiveInput(false);

  const handleChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setChars(evt.target.value.length);
    if (onChange) {
      onChange(evt);
    }
  };

  useEffect(() => {
    if (value) {
      setActiveInput(true);
      setChars(value.length);
    }
  }, [value]);

  const testId =
    dataTestId ?? `${label.replaceAll(' ', '-').toLocaleLowerCase()}-textarea`;

  return (
    <TextAreaWrapper data-testid={testId}>
      <LabelField isActive={activeInput} forId={testId}>
        {label}
        {required && '*'}
      </LabelField>
      {hasError && (
        <InputFieldIconStyled>{hasError && <ErrorIcon />}</InputFieldIconStyled>
      )}
      <TextAreaStyled
        value={value}
        name={name || testId}
        id={testId}
        onFocus={handleFocus}
        onChange={handleChange}
        onBlur={handleBlur}
        maxLength={maxLength}
        hasError={hasError}
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
        <Typography
          style={{ whiteSpace: 'nowrap' }}
          element='span'
          fontStyles='pXSmall'
          color='gray_100'
        >
          {maxLength - chars} Characters
        </Typography>
      </Box>
    </TextAreaWrapper>
  );
};

export default TextArea;
