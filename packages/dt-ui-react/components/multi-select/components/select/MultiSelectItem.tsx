import { useTheme } from '@emotion/react';
import { useEffect } from 'react';

import {
  OutlinedArrowDropDown,
  OutlinedArrowDropUp,
} from '../../../../core/assets';
import { BaseProps } from '../../../../types';
import { Box } from '../../../box';
import { DropdownMenu } from '../../../dropdown/components//menu/DropdownMenu';
import { Tag } from '../../../tag';
import { Typography } from '../../../typography';
import { useMultiSelectContext } from '../../context';
import { Actions, MultiSelectOptionValue } from '../../types';

import { MultiSelectStyled } from './MultiSelectItem.styled';

export type MultiSelectProps = {
  label?: string;
  placeholder?: string;
  isDisabled?: boolean;
  hasError?: boolean;
  onChange?: (options: string[], name?: string) => void;
} & BaseProps;

export const MultiSelectItem = ({
  children,
  label,
  placeholder,
  dataTestId = 'multi-select-item',
  isDisabled = false,
  hasError = false,
  onChange,
}: MultiSelectProps) => {
  const { state, dispatch, isOpen, setIsOpen, name } = useMultiSelectContext();
  const theme = useTheme();

  const handleOpenMultiSelect = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsOpen((prev) => !prev);
  };

  const handleRemoveItem = (
    event: React.MouseEvent<HTMLSpanElement>,
    option: MultiSelectOptionValue
  ) => {
    event.stopPropagation();
    dispatch({ type: Actions.REMOVE, payload: option });
  };

  useEffect(() => {
    onChange &&
      onChange(
        state.map((options) => options.value),
        name
      );
  }, [state]);

  return (
    <>
      <MultiSelectStyled
        data-testid={dataTestId}
        onClick={handleOpenMultiSelect}
        hasError={hasError}
        isDisabled={isDisabled}
      >
        <div style={{ overflow: 'hidden' }}>
          <Typography fontStyles='pXXSmall' color='gray_100'>
            {label}
          </Typography>
          {!state.length ? (
            <Typography
              fontStyles='pSmall'
              color='gray_200'
              style={{ textOverflow: 'ellipsis', overflow: 'hidden' }}
            >
              {placeholder ?? 'Select an option'}
            </Typography>
          ) : (
            <Box style={{ flexDirection: 'row', gap: '8px' }}>
              {state.map((option, index) => (
                <Tag
                  variant='basic'
                  dataTestId='multi-select-tag'
                  onClose={(e) => handleRemoveItem(e, option)}
                  key={`${option.value}--${index}`}
                >
                  {option.text}
                </Tag>
              ))}
            </Box>
          )}
        </div>
        {!isOpen ? (
          <OutlinedArrowDropDown
            color={isDisabled ? theme.colors.gray_90 : 'currentColor'}
          />
        ) : (
          <OutlinedArrowDropUp />
        )}
      </MultiSelectStyled>
      {isOpen && (
        <DropdownMenu dataTestId={dataTestId}>{children}</DropdownMenu>
      )}
    </>
  );
};
