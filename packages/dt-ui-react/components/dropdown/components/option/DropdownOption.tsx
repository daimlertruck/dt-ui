import { BaseProps } from '../../../../types';
import { useDropdownContext } from '../../context';
import { DropdownOptionValue } from '../../types';

import { DropdownOptionStyled } from './DropdownOption.styled';

export type DropdownOptionProps = {
  option: DropdownOptionValue;
  isDisabled?: boolean;
  onClick?: (option: string, name?: string) => void;
} & BaseProps;

export const DropdownOption = ({
  dataTestId,
  option,
  children,
  isDisabled,
  onClick,
  style,
}: DropdownOptionProps) => {
  const { state, setState, setIsOpen, name } = useDropdownContext();

  const value = {
    text: option.text ?? option.value,
    value: option.value,
  };

  const handleClick = () => {
    onClick && onClick(option.value, name);
    setIsOpen(false);
    setState(value);
  };

  const disabled = isDisabled || state.value === option.value;

  const testId = dataTestId ?? `dropdown-option-${option.value}`;

  return (
    <DropdownOptionStyled
      data-testid={testId}
      key={option.value}
      disabled={disabled}
      role='option'
      onClick={handleClick}
      style={style}
    >
      {children}
    </DropdownOptionStyled>
  );
};
