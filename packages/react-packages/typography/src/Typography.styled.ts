import { Theme, PaletteKeys, getContextualColor } from '@dt-ui/react-core';
import styled from '@emotion/styled';

interface TypographyStyledProps {
  color: keyof Theme['colors'] | PaletteKeys | 'unset' | 'inherit';
  fontStyles: keyof Theme['fontStyles'];
}

export const TypographyStyled = styled.p<TypographyStyledProps>`
  ${({ theme, fontStyles, color }) => `
    ${theme.fontStyles[fontStyles]};
    color: ${
      color === 'unset' || color === 'inherit'
        ? color
        : theme.colors[color as keyof Theme['colors']] ||
          getContextualColor(color as PaletteKeys, theme)
    };
   ${theme.responsiveFontStyles[fontStyles]}
  `};
`;
