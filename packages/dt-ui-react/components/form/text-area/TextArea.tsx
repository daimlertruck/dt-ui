import { ChangeEvent, useEffect, useState } from 'react';

import { Typography } from '../../typography';
import { LabelField } from '../label-field';

import { TextAreaStyled, TextAreaWrapper } from './TextArea.styled';

export interface TextAreaProps {
  label: string;
  name?: string;
  maxLength?: number;
  dataTestId?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea = ({
  label,
  onChange,
  dataTestId,
  name,
  value,
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
      </LabelField>
      <TextAreaStyled
        value={value}
        name={name || testId}
        id={testId}
        onFocus={handleFocus}
        onChange={handleChange}
        onBlur={handleBlur}
        maxLength={maxLength}
      />
      <Typography element='span' fontStyles='pXSmall' color='gray_100'>
        {maxLength - chars} Characters
      </Typography>
    </TextAreaWrapper>
  );
};

export default TextArea;
