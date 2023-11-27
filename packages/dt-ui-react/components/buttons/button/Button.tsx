import { BaseProps } from '../../../types';
import { Spinner } from '../../spinner';

import { ButtonStyled } from './Button.styled';
import { ContainedColors, OutlinedColors, TextColors } from './constants';

export type ButtonProps = {
  onClick: () => void;
  isDisabled?: boolean;
  isLoading?: boolean;
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
      data-testid={`${dataTestId}-button`}
    >
      {children}
      {isLoading && (
        <Spinner
          colorScheme={variant !== 'contained' ? 'positive' : 'negative'}
          size='small'
        />
      )}
    </ButtonStyled>
  );
};
