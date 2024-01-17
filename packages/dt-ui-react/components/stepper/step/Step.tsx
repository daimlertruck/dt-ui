import { useTheme } from '@emotion/react';
import { Children, cloneElement, ReactElement, useMemo } from 'react';

import { Check } from '../../../core';
import { BaseProps } from '../../../types';
import { Counter } from '../../counter';
import { Typography } from '../../typography';

import { LabelStyled, StepStyled } from './Step.styled';

interface BaseStepProps extends Pick<BaseProps, 'children'> {
  isActive?: boolean;
  isCompleted?: boolean;
  isDisabled?: boolean;
  isError?: boolean;
}

const Step = ({
  children,
  isActive = false,
  isCompleted = false,
  isDisabled = false,
  isError = false,
}: BaseStepProps) => {
  const clonedChildren = useMemo(
    () =>
      Children.map(children as ReactElement<BaseStepProps>, (child) => {
        return (
          child &&
          cloneElement(child, {
            isActive,
            isCompleted,
            isDisabled,
            isError,
            ...child.props,
          })
        );
      }),
    [children, isActive, isCompleted, isDisabled, isError]
  );

  return <StepStyled>{clonedChildren}</StepStyled>;
};

const StepCounter = ({
  children,
  isActive = false,
  isCompleted = false,
  isDisabled = false,
  isError = false,
}: BaseStepProps) => {
  const theme = useTheme();
  const color = isError ? 'error' : isDisabled ? 'neutralLight_100' : 'primary';
  const bgColor = isError
    ? theme.palette.errorLight_300
    : theme.palette.primaryLight_300;

  return (
    <Counter
      color={color}
      isLarge
      outlined={!isCompleted}
      style={{
        borderWidth: 1,
        ...(isActive && { backgroundColor: bgColor }),
      }}
    >
      {isCompleted ? (
        <Check height={8} width={10} />
      ) : (
        <Typography
          color={color}
          element='span'
          fontStyles='pXXSmall'
          style={{ fontWeight: 700 }}
        >
          {children}
        </Typography>
      )}
    </Counter>
  );
};

Step.Counter = StepCounter;

const labelColor = ({
  isActive,
  isError,
  isDisabled,
  isCompleted,
}: Partial<BaseStepProps>) => {
  if (isError) {
    return 'error';
  } else if (isActive || isCompleted) {
    return 'primary';
  } else if (isDisabled) {
    return 'neutralLight_100';
  } else {
    return 'neutral';
  }
};

Step.Label = ({
  children,
  isActive = false,
  isCompleted = false,
  isDisabled = false,
  isError = false,
}: BaseStepProps) => {
  const color = labelColor({ isActive, isError, isDisabled, isCompleted });

  return <LabelStyled color={color}>{children}</LabelStyled>;
};

export default Step;
