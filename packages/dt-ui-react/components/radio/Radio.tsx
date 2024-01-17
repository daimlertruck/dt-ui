import { Children, cloneElement, ReactElement, useMemo } from 'react';

import { Box } from '../..';
import { BaseProps, Direction } from '../../types';

import {
  RadioInputStyled,
  RadioLabelStyled,
  GroupStyled,
} from './Radio.styled';

export interface RadioGroupProps extends BaseProps {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  name: string;
  direction?: Direction;
}

export interface RadioProps {
  label: string;
  value: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  isDefaultChecked?: boolean;
  isDisabled?: boolean;
  name?: string;
}

export const RadioGroup = ({
  children,
  onChange,
  dataTestId,
  direction = 'row',
  name,
}: RadioGroupProps) => {
  const clonedChildren = useMemo(
    () =>
      Children.map(children as ReactElement<RadioGroupProps>, (child) => {
        return (
          child &&
          cloneElement(child, {
            ...child.props,
            onChange,
            name,
          })
        );
      }),
    [children, onChange, name]
  );

  return (
    <GroupStyled
      data-testid={dataTestId ?? 'radio-group'}
      direction={direction}
    >
      {clonedChildren}
    </GroupStyled>
  );
};

const Radio = ({
  onChange,
  label,
  isDefaultChecked,
  isDisabled,
  name = 'radio-group-name',
  value,
}: RadioProps) => {
  const radioId = `${value}-id`;
  return (
    <Box
      style={{
        flexDirection: 'row',
        gap: 8,
        cursor: isDisabled ? 'default' : 'pointer',
      }}
    >
      <RadioInputStyled
        defaultChecked={isDefaultChecked}
        disabled={isDisabled}
        id={radioId}
        name={name}
        onChange={onChange}
        type='radio'
        value={value}
      />
      <RadioLabelStyled htmlFor={radioId}>{label}</RadioLabelStyled>
    </Box>
  );
};

export default Radio;
