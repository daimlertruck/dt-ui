import { BaseProps } from '@dt-ui/react-core';

import { Spinner } from '../../spinner';

import { ButtonStyled } from './Button.styled';
import { ButtonSize, ButtonColor, ButtonVariant } from './constants';

export type ButtonProps = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isDisabled?: boolean;
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
      data-testid={`${dataTestId}-button`}
      disabled={isDisabled || isLoading}
      onClick={handleButtonClick}
      size={size}
      style={style}
      variant={variant}
    >
      {children}
      {isLoading ? (
        <Spinner
          colorScheme={variant !== 'solid' ? 'positive' : 'negative'}
          size='small'
        />
      ) : null}
    </ButtonStyled>
  );
};
