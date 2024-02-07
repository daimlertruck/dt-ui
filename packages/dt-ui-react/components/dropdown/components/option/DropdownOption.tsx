import { BaseProps } from '@dt-ui/react-core';

import { useDropdownContext } from '../../context';
import { DropdownOptionValue } from '../../types';

import { DropdownOptionStyled } from './DropdownOption.styled';

export interface DropdownOptionProps extends BaseProps {
  option: DropdownOptionValue;
  isDisabled?: boolean;
  onClick?: (option: string, name?: string) => void;
}

export const DropdownOption = ({
  dataTestId,
  option,
  children,
  isDisabled,
  onClick,
}: DropdownOptionProps) => {
  const { state, setState, setIsOpen, name } = useDropdownContext();

  const value = {
    text: option.text ?? option.value,
    value: option.value,
  };

  const handleClick = () => {
    if (disabled) {
      return;
    }
    setIsOpen(false);
    setState(value);
    onClick && onClick(option.value, name);
  };

  const disabled = isDisabled || state.value === option.value;

  const testId = dataTestId ?? `dropdown-option-${option.value}`;

  return (
    <DropdownOptionStyled
      data-testid={testId}
      disabled={disabled}
      key={option.value}
      onClick={handleClick}
      role='option'
    >
      {children}
    </DropdownOptionStyled>
  );
};
