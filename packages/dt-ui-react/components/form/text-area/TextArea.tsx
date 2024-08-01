import { LabelField } from '@dt-ui/react-label-field';
import { Typography } from '@dt-ui/react-typography';
import { ChangeEvent, useEffect, useState } from 'react';

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
      <LabelField forId={testId} isActive={activeInput}>
        {label}
      </LabelField>
      <TextAreaStyled
        id={testId}
        maxLength={maxLength}
        name={name || testId}
        onBlur={handleBlur}
        onChange={handleChange}
        onFocus={handleFocus}
        value={value}
      />
      <Typography color='content.medium' element='span' fontStyles='pXSmall'>
        {maxLength - chars} Characters
      </Typography>
    </TextAreaWrapper>
  );
};

export default TextArea;
