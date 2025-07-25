import { BaseProps } from '@dt-ui/react-core';
import { Typography } from '@dt-ui/react-typography';
import { ComponentPropsWithoutRef } from 'react';

import { LabelFieldStyled } from './LabelField.styled';

export interface LabelFieldProps
  extends ComponentPropsWithoutRef<'label'>,
    BaseProps {
  isDisabled?: boolean;
  isActive?: boolean;
  hasError?: boolean;
  isRequired?: boolean;
  isFloating?: boolean;
}

export const LabelField = ({
  children,
  isDisabled = false,
  isActive = false,
  dataTestId,
  isRequired,
  hasError = false,
  isFloating = true,
  ...rest
}: LabelFieldProps) => {
  const testId = dataTestId ?? 'label-field';

  return (
    <LabelFieldStyled
      data-testid={testId}
      disabled={isDisabled}
      hasError={hasError}
      isActive={isActive}
      isFloating={isFloating}
      {...rest}
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
