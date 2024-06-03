import { BaseProps, Orientation } from '@dt-ui/react-core';

import { StepperStyled } from './Stepper.styled';

export interface StepperProps extends BaseProps {
  orientation?: Orientation;
}

export const Stepper = ({
  children,
  dataTestId,
  orientation,
}: StepperProps) => {
  const testId = dataTestId ?? 'default';
  return (
    <StepperStyled data-testid={`${testId}-stepper`} orientation={orientation}>
      {children}
    </StepperStyled>
  );
};
