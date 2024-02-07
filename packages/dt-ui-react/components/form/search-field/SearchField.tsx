import { debounce } from '@dt-ui/react-core';
import { ChangeEvent } from 'react';

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
      onChange={debouncedOnChange}
      style={{
        width: '350px',
      }}
    >
      <SearchFieldIconStyled onClick={onClick}>
        <svg
          height='19'
          viewBox='0 0 18 19'
          width='18'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M12.8645 11.8208H12.0515L11.7633 11.5429C12.7719 10.3696 13.3791 8.84648 13.3791 7.18954C13.3791 3.49485 10.3842 0.5 6.68954 0.5C2.99485 0.5 0 3.49485 0 7.18954C0 10.8842 2.99485 13.8791 6.68954 13.8791C8.34648 13.8791 9.86964 13.2719 11.0429 12.2633L11.3208 12.5515V13.3645L16.4666 18.5L18 16.9666L12.8645 11.8208ZM6.68954 11.8208C4.12693 11.8208 2.05832 9.75214 2.05832 7.18954C2.05832 4.62693 4.12693 2.55832 6.68954 2.55832C9.25214 2.55832 11.3208 4.62693 11.3208 7.18954C11.3208 9.75214 9.25214 11.8208 6.68954 11.8208Z' />
        </svg>
      </SearchFieldIconStyled>
    </TextField>
  );
};
