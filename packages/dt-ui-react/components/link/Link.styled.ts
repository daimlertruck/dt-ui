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
    color: ${theme.palette.primary.default};
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
        ${theme.fontStyles.p}
      `
    };

    ${
      textSize == LinkTextSize.Medium &&
      `
        ${theme.fontStyles.pSmall}
      `
    };

    ${
      textSize == LinkTextSize.Small &&
      `
        ${theme.fontStyles.pXXSmall}
      `
    };
  `}
`;

export const ButtonLinkStyled = ButtonStyled.withComponent('a');
