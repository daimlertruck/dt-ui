import styled from '@emotion/styled';

import { CustomTheme as Theme } from '../../types';

interface TypographyStyledProps {
  color: keyof Theme['colors'] | keyof Theme['palette'] | 'unset' | 'inherit';
  fontStyles: keyof Theme['fontStyles'];
}

export const TypographyStyled = styled.p<TypographyStyledProps>`
  ${({ theme, fontStyles, color }) => `
    ${theme.fontStyles[fontStyles]};
    color: ${
      color === 'unset' || color === 'inherit'
        ? color
        : theme.colors[color as keyof Theme['colors']] ||
          theme.palette[color as keyof Theme['palette']]
    };
   ${theme.responsiveFontStyles[fontStyles]}
  `};
`;
