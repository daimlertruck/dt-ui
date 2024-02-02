import styled from '@emotion/styled';

import { CustomTheme as Theme } from '../../types';

interface TypographyStyledProps {
  color:
    | keyof Theme['colors']
    | keyof Theme['palette']['alpha']
    | 'unset'
    | 'inherit';
  fontStyles: keyof Theme['fontStyles']['alpha'];
}

export const TypographyStyled = styled.p<TypographyStyledProps>`
  ${({ theme, fontStyles, color }) => `
    ${theme.fontStyles.alpha[fontStyles]};
    color: ${
      color === 'unset' || color === 'inherit'
        ? color
        : theme.colors[color as keyof Theme['colors']] ||
          theme.palette.alpha[color as keyof Theme['palette']['alpha']]
    };
  `};
`;
