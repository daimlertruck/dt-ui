import { BaseProps, Orientation } from '../../types';

import { StepperStyled } from './Stepper.styled';

export interface StepperProps extends BaseProps {
  orientation?: Orientation;
}

const Stepper = ({
  children,
  dataTestId,
  style,
  orientation = 'vertical',
}: StepperProps) => {
  const testId = dataTestId ?? 'default';
  return (
    <StepperStyled
      data-testid={`${testId}-stepper`}
      orientation={orientation}
      style={style}
    >
      {children}
    </StepperStyled>
  );
};

export default Stepper;
