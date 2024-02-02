import styled from '@emotion/styled';

import { ButtonStyled } from '../buttons/button/Button.styled';

import { LinkTextSize } from './constants';

interface LinkStyledProps {
  isUnderline: boolean;
  disabled?: boolean;
  textSize?: string;
}

export const LinkStyled = styled.a<LinkStyledProps>`
  ${({ theme, disabled, isUnderline, textSize }) => `
    color: ${theme.palette.alpha.primary};
    text-decoration: ${isUnderline ? 'underline' : 'none'};

    ${
      disabled &&
      `
        opacity: 0.4;
        pointer-events: none;
    
      `
    };

    ${
      textSize == LinkTextSize.Large &&
      `
        ${theme.fontStyles.alpha.p}
      `
    };

    ${
      textSize == LinkTextSize.Medium &&
      `
        ${theme.fontStyles.alpha.pSmall}
      `
    };

    ${
      textSize == LinkTextSize.Small &&
      `
        ${theme.fontStyles.alpha.pXXSmall}
      `
    };
  `}
`;

export const ButtonLinkStyled = ButtonStyled.withComponent('a');
