import { BaseProps, Colors } from '../../../types';

import { IconButtonStyled } from './IconButton.styled';

export interface IconButtonProps extends BaseProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseDown?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseUp?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseOver?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseEnter?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  color?: Colors | 'default';
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
      aria-label={ariaLabel}
      color={color}
      data-testid={dataTestId ? dataTestId : 'icon-button'}
      disabled={isDisabled}
      onClick={handleClick}
      onMouseDown={onMouseDown}
      onMouseEnter={onMouseEnter}
      onMouseOver={onMouseOver}
      onMouseUp={onMouseUp}
    >
      {children}
    </IconButtonStyled>
  );
};
