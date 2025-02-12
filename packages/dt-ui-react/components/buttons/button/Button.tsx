import { BaseProps } from '@dt-ui/react';
import { Spinner } from '@dt-ui/react';

import { ButtonStyled } from './Button.styled';
import { ContainedColors, OutlinedColors, TextColors } from './constants';

export type ButtonProps = {
  onClick: () => void;
  isDisabled?: boolean;
  isLoading?: boolean;
  isContrast?: boolean;
} & BaseProps &
  (
    | { variant?: 'contained'; color?: ContainedColors }
    | { variant?: 'outlined'; color?: OutlinedColors }
    | { variant?: 'text'; color?: TextColors }
  );

export const Button = ({
  style,
  variant = 'contained',
  children,
  onClick,
  dataTestId,
  isDisabled = false,
  isLoading,
  isContrast,
  color = 'primary',
}: ButtonProps) => {
  return (
    <ButtonStyled
      color={color}
      disabled={isDisabled}
      style={style}
      variant={variant}
      onClick={onClick}
      isLoading={isLoading}
      isContrast={isContrast}
      data-testid={`${dataTestId}-button`}
    >
      {children}
      {isLoading && (
        <Spinner
          spinnerTheme={variant !== 'contained' ? 'dark' : 'light'}
          size='small'
        />
      )}
    </ButtonStyled>
  );
};
