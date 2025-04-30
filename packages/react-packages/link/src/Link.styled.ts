import { ButtonStyled } from '@dt-ui/react-button';
import styled from '@emotion/styled';

import { LinkTextSize } from '.';

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
        ${theme.fontStyles.body1Bold}
      `
    };

    ${
      textSize == LinkTextSize.Medium &&
      `
        ${theme.fontStyles.body2Bold}
      `
    };

    ${
      textSize == LinkTextSize.Small &&
      `
        ${theme.fontStyles.body3Bold}
      `
    };
  `}
`;

export const ButtonLinkStyled = ButtonStyled.withComponent('a');
