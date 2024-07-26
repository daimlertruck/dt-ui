import { BaseProps } from '@dt-ui/react-core';
import { Icon } from '@dt-ui/react-icon';
import { Typography } from '@dt-ui/react-typography';
import { useTheme } from '@emotion/react';
import { Children, ReactElement, useEffect } from 'react';

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
        hasBorder={hasBorder}
        hasError={hasError}
        onClick={handleClick}
        style={style}
      >
        <div style={{ overflow: 'hidden' }}>
          <Typography
            color={disabled ? 'content.disabled' : 'content.body'}
            fontStyles='pXXSmall'
          >
            {label}
          </Typography>
          <Typography
            color={disabled ? 'content.disabled' : 'content.body'}
            fontStyles='pSmall'
            style={{ textOverflow: 'ellipsis', overflow: 'hidden' }}
          >
            {!state.value ? 'Select an option' : state.text}
          </Typography>
        </div>
        <Icon
          code={isOpen ? 'expand_less' : 'expand_more'}
          color={
            !isOpen && isDisabled
              ? theme.palette.content.disabled
              : 'currentColor'
          }
          size='medium'
        />
      </SelectDropdownStyled>
      {isOpen ? (
        <DropdownMenu dataTestId={dataTestId}>{children}</DropdownMenu>
      ) : null}
    </>
  );
};
