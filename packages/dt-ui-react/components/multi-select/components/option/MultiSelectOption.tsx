import { CloseIcon } from '../../../../core/assets';
import { BaseProps } from '../../../../types';
import { Box } from '../../../box';
import { useMultiSelectContext } from '../../context';
import { MultiSelectOptionValue } from '../../types';
import { Actions } from '../../types';

import {
  MultiSelectOptionStyled,
  CloseButtonStyled,
} from './MultiSelectOption.styled';

export type MultiSelectOptionProps = {
  option: MultiSelectOptionValue;
  onClick?: (option: string, name?: string) => void;
  onClose?: (options: MultiSelectOptionValue) => void;
  isDisabled?: boolean;
} & BaseProps;

export const MultiSelectOption = ({
  dataTestId,
  option,
  children,
  isDisabled,
  onClick,
  onClose,
}: MultiSelectOptionProps) => {
  const { state, dispatch, name } = useMultiSelectContext();

  const value = {
    text: option.text ?? option.value,
    value: option.value,
  };

  const handleAddOption = () => {
    onClick && onClick(option?.value, name);
    dispatch({ type: Actions.ADD, payload: option });
  };

  const handleRemoveOption = () => {
    dispatch({ type: Actions.REMOVE, payload: value });
    onClose && onClose(option);
  };

  const isSelected = !!state.find(
    (stateValue) => stateValue.value === option.value
  );

  const disabled = isDisabled || isSelected;

  const testId = dataTestId ?? `multi-select-option-${option.value}`;

  return (
    <Box style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <MultiSelectOptionStyled
        data-testid={testId}
        disabled={disabled}
        key={option.value}
        onClick={handleAddOption}
        role='option'
      >
        {children}
      </MultiSelectOptionStyled>
      {option.isRemovable && disabled ? (
        <CloseButtonStyled onClick={handleRemoveOption}>
          <CloseIcon height={12} width={12} />
        </CloseButtonStyled>
      ) : null}
    </Box>
  );
};
