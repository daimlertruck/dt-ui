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
      isActive={isActive}
      htmlFor={forId}
      data-testid={testId}
      disabled={isDisabled}
    >
      {children}
    </LabelFieldStyled>
  );
};

export default LabelField;
