import { CSSProperties } from 'react';

import { LabelFieldStyled } from './LabelField.styled';

export interface LabelFieldProps {
  children: React.ReactNode;
  forId: string;
  isDisabled?: boolean;
  isActive?: boolean;
  dataTestId?: string;
  style?: CSSProperties;
}

export const LabelField = ({
  children,
  isDisabled,
  forId,
  isActive = false,
  dataTestId,
  style,
}: LabelFieldProps) => {
  const testId = dataTestId ?? 'label-field';

  return (
    <LabelFieldStyled
      data-testid={testId}
      disabled={isDisabled}
      htmlFor={forId}
      isActive={isActive}
      style={style}
    >
      {children}
    </LabelFieldStyled>
  );
};
