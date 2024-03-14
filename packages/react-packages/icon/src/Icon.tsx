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
  onClick?: () => void;
}

export const Icon = ({
  code,
  color,
  dataTestId,
  size = 'large',
  style,
  variant = 'outlined',
  onClick,
}: IconProps) => {
  const theme = useTheme();

  return (
    <IconStyled
      color={color ?? theme.palette.content.body}
      data-testid={dataTestId ?? 'icon'}
      hasClick={!!onClick}
      onClick={onClick}
      size={size}
      style={style}
      variant={variant}
    >
      {code}
    </IconStyled>
  );
};
