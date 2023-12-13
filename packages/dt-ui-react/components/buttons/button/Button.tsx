import { BaseProps } from '../../../types';
import { Spinner } from '../../spinner';

import { ButtonStyled } from './Button.styled';
import {
  ButtonSizes,
  OutlinedColors,
  SolidColors,
  TextColors,
} from './constants';

export type ButtonProps = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isDisabled?: boolean;
  isLoading?: boolean;
  size?: ButtonSizes;
} & BaseProps &
  (
    | { variant?: 'solid'; color?: SolidColors }
    | { variant?: 'outlined'; color?: OutlinedColors }
    | { variant?: 'text'; color?: TextColors }
  );

export const Button = ({
  style,
  size = 'medium',
  variant = 'solid',
  children,
  onClick,
  dataTestId,
  isDisabled = false,
  isLoading,
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
