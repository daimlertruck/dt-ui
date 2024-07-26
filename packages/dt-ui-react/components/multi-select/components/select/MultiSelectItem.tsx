import { Box } from '@dt-ui/react-box';
import { BaseProps } from '@dt-ui/react-core';
import { DropdownMenu } from '@dt-ui/react-dropdown';
import { Tag } from '@dt-ui/react-tag';
import { Typography } from '@dt-ui/react-typography';
import { useTheme } from '@emotion/react';
import { useMemo, Children, ReactElement, cloneElement } from 'react';

import {
  OutlinedArrowDropDown,
  OutlinedArrowDropUp,
} from '../../../../core/assets';
import { useMultiSelectContext } from '../../context';
import { Actions, MultiSelectOptionValue } from '../../types';

import { MultiSelectStyled } from './MultiSelectItem.styled';

export type MultiSelectProps = {
  label?: string;
  placeholder?: string;
  isDisabled?: boolean;
  hasError?: boolean;
  onClose?: (options: MultiSelectOptionValue) => void;
} & BaseProps;

export const MultiSelectItem = ({
  children,
  label,
  placeholder,
  dataTestId = 'multi-select-item',
  isDisabled = false,
  hasError = false,
  onClose,
}: MultiSelectProps) => {
  const { state, dispatch, isOpen, setIsOpen } = useMultiSelectContext();
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
    onClose && onClose(option);
  };

  const clonedChildren = useMemo(
    () =>
      Children.map(children as ReactElement<MultiSelectProps>, (child) => {
        return (
          child &&
          cloneElement(child, {
            ...child.props,
            onClose,
          } as MultiSelectProps)
        );
      }),
    [children, onClose]
  );

  return (
    <>
      <MultiSelectStyled
        data-testid={dataTestId}
        hasError={hasError}
        isDisabled={isDisabled}
        onClick={handleOpenMultiSelect}
      >
        <div style={{ overflow: 'hidden' }}>
          <Typography color='content.body' fontStyles='pXXSmall'>
            {label}
          </Typography>
          {!state.length ? (
            <Typography
              color='content.disabled'
              fontStyles='pSmall'
              style={{ textOverflow: 'ellipsis', overflow: 'hidden' }}
            >
              {placeholder ?? 'Select an option'}
            </Typography>
          ) : (
            <Box style={{ flexDirection: 'row', gap: '8px' }}>
              {state.map((option) => (
                <Tag
                  dataTestId='multi-select-tag'
                  {...(option.isRemovable && {
                    onClose: (e) => handleRemoveItem(e, option),
                  })}
                  isClickable={option.isRemovable}
                  key={`tag--${option.value}`}
                >
                  {option.text}
                </Tag>
              ))}
            </Box>
          )}
        </div>
        {!isOpen ? (
          <OutlinedArrowDropDown
            color={isDisabled ? theme.palette.content.disabled : 'currentColor'}
          />
        ) : (
          <OutlinedArrowDropUp />
        )}
      </MultiSelectStyled>
      {isOpen ? (
        <DropdownMenu dataTestId={dataTestId}>{clonedChildren}</DropdownMenu>
      ) : null}
    </>
  );
};
