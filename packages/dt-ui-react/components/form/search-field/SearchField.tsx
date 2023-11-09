import { ChangeEvent } from 'react';

import { SearchIcon } from '../../../core';
import { debounce } from '../../../utils';
import { Spinner } from '../../spinner';
import { TextField } from '../text-field';

import { SearchFieldIconStyled } from './SearchField.styled';

export interface SearchFieldProps {
  label: string;
  initialValue?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  delay?: number;
  isLoading?: boolean;
}

export const SearchField = ({
  label,
  initialValue,
  onChange = () => null,
  onClick = () => null,
  delay = 1000,
  isLoading = false,
}: SearchFieldProps) => {
  const debouncedOnChange = debounce(onChange, delay);

  return (
    <TextField
      initialValue={initialValue}
      label={label}
      style={{
        width: '350px',
      }}
      onChange={debouncedOnChange}
    >
      <SearchFieldIconStyled
        {...(!isLoading && { onClick })}
        data-testid='search-field-icon'
        isLoading={isLoading}
      >
        {isLoading ? <Spinner size='small' /> : <SearchIcon />}
      </SearchFieldIconStyled>
    </TextField>
  );
};
