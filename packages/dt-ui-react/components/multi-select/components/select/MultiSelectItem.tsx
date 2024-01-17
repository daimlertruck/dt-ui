import { useTheme } from '@emotion/react';
import { useMemo, Children, ReactElement, cloneElement } from 'react';

import { Box } from '../../../..';
import {
  OutlinedArrowDropDown,
  OutlinedArrowDropUp,
} from '../../../../core/assets';
import { BaseProps } from '../../../../types';
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
          <Typography color='grey_100' fontStyles='pXXSmall'>
            {label}
          </Typography>
          {!state.length ? (
            <Typography
              color='grey_200'
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
            color={isDisabled ? theme.colors.grey_90 : 'currentColor'}
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
