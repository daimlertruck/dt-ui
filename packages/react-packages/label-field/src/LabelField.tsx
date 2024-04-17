import { Typography } from '@dt-ui/react-typography';
import { CSSProperties } from 'react';

import { LabelFieldStyled } from './LabelField.styled';

export interface LabelFieldProps {
  children: React.ReactNode;
  forId: string;
  isDisabled?: boolean;
  isActive?: boolean;
  dataTestId?: string;
  style?: CSSProperties;
  hasError?: boolean;
  isRequired?: boolean;
}

export const LabelField = ({
  children,
  isDisabled,
  forId,
  isActive = false,
  dataTestId,
  style,
  isRequired,
  hasError = false,
}: LabelFieldProps) => {
  const testId = dataTestId ?? 'label-field';

  return (
    <LabelFieldStyled
      data-testid={testId}
      disabled={isDisabled}
      hasError={hasError}
      htmlFor={forId}
      isActive={isActive}
      style={style}
    >
      {children}
      {isRequired ? (
        <Typography color='error.default' element='span' fontStyles='body3'>
          *
        </Typography>
      ) : null}
    </LabelFieldStyled>
  );
};
