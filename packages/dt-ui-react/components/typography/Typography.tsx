import { forwardRef } from 'react';

import { theme } from '../../themes/default';
import { BaseProps, Elements, CustomTheme as Theme } from '../../types';

import { TypographyStyled } from './Typography.styled';

export interface TypographyProps extends BaseProps {
  color?: keyof Theme['colors'] | keyof Theme['palette'] | 'unset' | 'inherit';
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
