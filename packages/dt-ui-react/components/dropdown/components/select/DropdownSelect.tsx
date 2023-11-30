import { useTheme } from '@emotion/react';
import { Children, ReactElement, useEffect } from 'react';

import {
  OutlinedArrowDropDown,
  OutlinedArrowDropUp,
} from '../../../../core/assets';
import { BaseProps } from '../../../../types';
import { Typography } from '../../../typography';
import { useDropdownContext } from '../../context';
import { DropdownMenu } from '../menu/DropdownMenu';

import { SelectDropdownStyled } from './DropdownSelect.styled';

export type DropdownSelectProps = {
  label?: string;
  isDisabled?: boolean;
  hasBorder?: boolean;
  hasError?: boolean;
} & BaseProps;

export const DropdownSelect = ({
  children,
  label,
  style,
  dataTestId = 'dropdown-select',
  isDisabled = false,
  hasBorder = true,
  hasError = false,
}: DropdownSelectProps) => {
  const { state, setState, isOpen, setIsOpen } = useDropdownContext();
  const theme = useTheme();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsOpen((prev) => !prev);
  };

  const childCount = Children.count(children);

  useEffect(() => {
    const hasOption = Children.toArray(children).find(
      (child) => (child as ReactElement).props.option.value === state.value
    );

    if (!hasOption) {
      setState({ text: '', value: '' });
    }
  }, [children, setState, state.value]);

  useEffect(() => {
    if (childCount === 1) {
      const options = Children.map(
        children,
        (child) => child && (child as ReactElement).props.option
      );

      if (options && options[0]) {
        const option = {
          text: options[0].text ?? options[0].value,
          value: options[0].value,
        };

        setState(option);
      }
    }
  }, [childCount, setState, children]);

  const disabled = isDisabled || childCount < 2;

  return (
    <>
      <SelectDropdownStyled
        data-testid={dataTestId}
        disabled={disabled}
        onClick={handleClick}
        style={style}
        hasBorder={hasBorder}
        hasError={hasError}
      >
        <div style={{ overflow: 'hidden' }}>
          <Typography
            fontStyles='pXXSmall'
            color={disabled ? 'grey_90' : 'grey_100'}
          >
            {label}
          </Typography>
          <Typography
            fontStyles='pSmall'
            color={disabled ? 'grey_100' : 'grey_300'}
            style={{ textOverflow: 'ellipsis', overflow: 'hidden' }}
          >
            {!state.value ? 'Select an option' : state.text}
          </Typography>
        </div>
        {!isOpen ? (
          <OutlinedArrowDropDown
            color={isDisabled ? theme.colors.grey_90 : 'currentColor'}
          />
        ) : (
          <OutlinedArrowDropUp />
        )}
      </SelectDropdownStyled>
      {isOpen && (
        <DropdownMenu dataTestId={dataTestId}>{children}</DropdownMenu>
      )}
    </>
  );
};
