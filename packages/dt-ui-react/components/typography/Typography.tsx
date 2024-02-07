import { BaseProps, Theme, PaletteKeys } from '@dt-ui/react-core';
import { useTheme } from '@emotion/react';
import { forwardRef } from 'react';

import { Elements } from '../../types';

import { TypographyStyled } from './Typography.styled';

export interface TypographyProps extends BaseProps {
  color?: keyof Theme['colors'] | PaletteKeys | 'unset' | 'inherit';
  fontStyles?: keyof Theme['fontStyles'];
  element?: Elements;
}

const Typography = forwardRef<HTMLParagraphElement, TypographyProps>(
  (
    {
      children,
      element,
      fontStyles,
      color = 'grey_300',
      dataTestId,
      style,
    }: TypographyProps,
    ref
  ) => {
    const theme = useTheme();
    const el = element as keyof Theme['fontStyles'];
    const fonts = fontStyles ?? (theme.fontStyles[el] ? el : 'body1');

    return (
      <TypographyStyled
        as={element}
        color={color}
        data-testid={dataTestId ?? 'typography'}
        fontStyles={fonts}
        ref={ref}
        style={style}
      >
        {children}
      </TypographyStyled>
    );
  }
);

export default Typography;
