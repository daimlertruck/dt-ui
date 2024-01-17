import { LabelFieldStyled } from './LabelFied.styled';

export interface LabelFieldProps {
  children: React.ReactNode;
  forId: string;
  isDisabled?: boolean;
  isActive?: boolean;
  dataTestId?: string;
}

const LabelField = ({
  children,
  isDisabled,
  forId,
  isActive = false,
  dataTestId,
}: LabelFieldProps) => {
  const testId = dataTestId ?? 'label-field';

  return (
    <LabelFieldStyled
      data-testid={testId}
      disabled={isDisabled}
      htmlFor={forId}
      isActive={isActive}
    >
      {children}
    </LabelFieldStyled>
  );
};

export default LabelField;
