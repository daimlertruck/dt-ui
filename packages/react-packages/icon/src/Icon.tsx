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
}

export const Icon = ({
  code,
  color,
  dataTestId,
  size = 'l',
  style,
  variant = 'outlined',
}: IconProps) => {
  const theme = useTheme();

  return (
    <IconStyled
      color={color ?? theme.palette.content.default}
      data-testid={dataTestId ?? 'icon'}
      size={size}
      style={style}
      variant={variant}
    >
      {code}
    </IconStyled>
  );
};
