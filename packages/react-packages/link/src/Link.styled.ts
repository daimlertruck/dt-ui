import styled from '@emotion/styled';

import { LinkTextSize, LinkVariant } from '.';

interface LinkStyledProps {
  disabled?: boolean;
  textSize?: string;
  variant?: LinkVariant;
}

export const LinkStyled = styled.a<LinkStyledProps>`
  ${({ theme, disabled, textSize, variant = 'primary' }) => `
    color: ${theme.palette[variant].default};
    text-decoration: none;

    ${
      disabled &&
      `
        color: ${theme.palette[variant].light};
        cursor: not-allowed;
      `
    };

    ${
      !disabled &&
      `
        &:hover {
          text-decoration: underline;
        }

        &:active {
          color: ${theme.palette[variant].dark};
          text-decoration: none;
        }
      `
    };

    &:focus-visible {
      outline: 2px solid ${theme.palette.border.dark};
    }

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
