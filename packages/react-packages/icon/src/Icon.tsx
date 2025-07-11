import { Code } from '@dt-ui/icons';
import { BaseProps } from '@dt-ui/react-core';
import { useTheme } from '@emotion/react';

import { IconStyled } from './Icon.styled';
import { Size, Variant } from './types';

export interface IconProps extends Omit<BaseProps, 'children'> {
  code: Code;
  color?: string;
  size?: Size;
  variant?: Variant;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  isDisabled?: boolean;
}

export const Icon = ({
  code,
  color,
  dataTestId,
  size = 'large',
  style,
  variant = 'outlined',
  onClick,
  isDisabled,
}: IconProps) => {
  const theme = useTheme();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isDisabled) {
      return;
    }

    e.preventDefault();
    e.stopPropagation();
    onClick && onClick(e);
  };

  return (
    <IconStyled
      color={color ?? theme.palette.content.default}
      data-testid={dataTestId ?? 'icon'}
      disabled={isDisabled}
      hasClick={!!onClick}
      onClick={handleClick}
      size={size}
      style={style}
      variant={variant}
    >
      {code}
    </IconStyled>
  );
};
