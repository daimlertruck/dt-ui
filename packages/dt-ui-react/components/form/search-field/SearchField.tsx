import { ChangeEvent } from 'react';

import { SearchIcon } from '../../../core';
import { debounce } from '../../../utils';
import { TextField } from '../text-field';

import { SearchFieldIconStyled } from './SearchField.styled';

type SearchFieldType = {
  label: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  delay?: number;
};

export const SearchField = ({
  label,
  onChange = () => null,
  onClick = () => null,
  delay = 1000,
}: SearchFieldType) => {
  const debouncedOnChange = debounce(onChange, delay);

  return (
    <TextField
      label={label}
      style={{
        width: '350px',
      }}
      onChange={debouncedOnChange}
    >
      <SearchFieldIconStyled onClick={onClick}>
        <SearchIcon />
      </SearchFieldIconStyled>
    </TextField>
  );
};
