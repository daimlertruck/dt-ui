import { BaseProps, CustomTheme as Theme } from '../../../types';

import { IconButtonStyled } from './IconButton.styled';

export interface IconButtonProps extends BaseProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseDown?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseUp?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseOver?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseEnter?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  color?: keyof Theme['palette'];
  isDisabled?: boolean;
  ariaLabel?: string;
}

export const IconButton = ({
  children,
  dataTestId,
  isDisabled,
  ariaLabel,
  onClick,
  onMouseDown,
  onMouseUp,
  onMouseOver,
  onMouseEnter,
  color = 'primary',
}: IconButtonProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    onClick && onClick(e);
  };

  return (
    <IconButtonStyled
      disabled={isDisabled}
      color={color}
      onClick={handleClick}
      onMouseDown={onMouseDown}
      onMouseOver={onMouseOver}
      onMouseEnter={onMouseEnter}
      onMouseUp={onMouseUp}
      data-testid={dataTestId ?? 'icon-button'}
      aria-label={ariaLabel}
    >
      {children}
    </IconButtonStyled>
  );
};
