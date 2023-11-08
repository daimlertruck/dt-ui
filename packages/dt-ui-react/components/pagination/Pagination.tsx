import React, { useEffect, useMemo, useState } from 'react';

import { ArrowLeftIcon, ArrowRightIcon } from '../../core';
import { BaseProps } from '../../types';
import { debounce } from '../../utils';
import { Typography } from '../typography';

import {
  PaginationStyled,
  InputStyled,
  LastPageStyled,
  ArrowStyled,
} from './Pagination.styled';

export interface ContentProps {
  totalPages: number;
  onClick: () => void;
}

export interface ArrowProps {
  onClick: () => void;
  disabled?: boolean;
}

export interface PaginationInputProps {
  totalPages: number;
  onChange: (value: number) => void;
  onHandleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  value?: number;
}

export const Pagination = ({ children, dataTestId }: BaseProps) => {
  return (
    <PaginationStyled data-testid={dataTestId ?? 'pagination-wrapper'}>
      {children}
    </PaginationStyled>
  );
};

Pagination.Content = ({ totalPages, onClick }: ContentProps) => {
  return (
    <Typography fontStyles='pXSmall'>
      of{' '}
      <LastPageStyled
        onClick={onClick}
        data-testid='pagination-last-page'
        title='Go to last page'
      >
        {totalPages}
      </LastPageStyled>
    </Typography>
  );
};

Pagination.NextItem = ({ onClick, disabled }: ArrowProps) => {
  return (
    <ArrowStyled
      title='Go to next page'
      onClick={onClick}
      disabled={disabled}
      data-testid='pagination-next-item'
    >
      <ArrowRightIcon />
    </ArrowStyled>
  );
};

Pagination.PreviousItem = ({ onClick, disabled }: ArrowProps) => {
  return (
    <ArrowStyled
      title='Go to previous page'
      onClick={onClick}
      disabled={disabled}
      data-testid='pagination-previous-item'
    >
      <ArrowLeftIcon />
    </ArrowStyled>
  );
};

export const PaginationInput = ({
  totalPages,
  onHandleKeyDown,
  value,
  onChange,
}: PaginationInputProps) => {
  const [inputValue, setInputValue] = useState(1);
  const [hasError, setHasError] = useState(false);

  const debouncedFn = useMemo(() => debounce((fn) => fn(), 500), []);

  useEffect(() => {
    if (value !== undefined) {
      setInputValue(value);
    }
  }, [value]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setInputValue(value);

    const valueHasError = value > totalPages || value === 0;

    if (valueHasError) {
      setHasError(true);
    } else {
      setHasError(false);
    }

    debouncedFn(() => {
      if (valueHasError) return;
      onChange(value);
    });
  };

  return (
    <InputStyled
      data-testid='pagination-input'
      value={inputValue}
      onKeyDown={onHandleKeyDown}
      onChange={handleChange}
      hasError={hasError}
    />
  );
};
