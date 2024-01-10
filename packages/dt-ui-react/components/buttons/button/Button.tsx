import { BaseProps } from '../../../types';
import { Spinner } from '../../spinner';

import { ButtonStyled } from './Button.styled';
import { ButtonSize, ButtonColor, ButtonVariant } from './constants';

export type ButtonProps = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isDisabled?: boolean;
  isUppercased?: boolean;
  isLoading?: boolean;
  size?: ButtonSize;
  variant?: ButtonVariant;
  color?: ButtonColor;
} & BaseProps;

export const Button = ({
  style,
  children,
  onClick,
  dataTestId,
  isLoading,
  isDisabled = false,
  isUppercased = false,
  size = 'medium',
  variant = 'solid',
  color = 'primary',
}: ButtonProps) => {
  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (isDisabled || isLoading) {
      return;
    }
    onClick?.(event);
  };

  return (
    <ButtonStyled
      color={color}
      size={size}
      disabled={isDisabled || isLoading}
      isUppercased={isUppercased}
      style={style}
      variant={variant}
      onClick={handleButtonClick}
      data-testid={`${dataTestId}-button`}
    >
      {children}
      {isLoading && (
        <Spinner
          colorScheme={variant !== 'solid' ? 'positive' : 'negative'}
          size='small'
        />
      )}
    </ButtonStyled>
  );
};
