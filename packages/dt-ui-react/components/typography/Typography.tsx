import { forwardRef } from 'react';

import { theme } from '../../themes/default';
import { BaseProps, Elements, CustomTheme as Theme } from '../../types';

import { TypographyStyled } from './Typography.styled';

export interface TypographyProps extends BaseProps {
  color?:
    | keyof Theme['colors']
    | keyof Theme['palette']['alpha']
    | 'unset'
    | 'inherit';
  fontStyles?: keyof Theme['fontStyles']['alpha'];
  element?: Elements;
}

const Typography = forwardRef<HTMLParagraphElement, TypographyProps>(
  (
    {
      children,
      element,
      fontStyles,
      color = 'gray_300',
      dataTestId,
      style,
    }: TypographyProps,
    ref
  ) => {
    const el = element as keyof Theme['fontStyles']['alpha'];
    const fonts = fontStyles ?? (theme.fontStyles.alpha[el] ? el : 'p');

    return (
      <TypographyStyled
        ref={ref}
        as={element}
        fontStyles={fonts}
        color={color}
        style={style}
        data-testid={dataTestId ?? 'typography'}
      >
        {children}
      </TypographyStyled>
    );
  }
);

export default Typography;
