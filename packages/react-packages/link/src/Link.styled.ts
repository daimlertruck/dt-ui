import styled from '@emotion/styled';

import { LinkSize, LinkVariant } from '.';

interface LinkStyledProps {
  disabled?: boolean;
  size?: LinkSize;
  variant?: LinkVariant;
}

export const LinkStyled = styled.a<LinkStyledProps>`
  ${({ theme, disabled, size, variant = 'primary' }) => `
    color: ${theme.palette[variant].default};
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: ${theme.spacing['5xs']};

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
        &:hover > span {
          text-decoration: underline;
        }

        &:active {
          color: ${theme.palette[variant].dark};
          text-decoration: none;
        }
      `
    };

    &:focus-visible {
      outline: 2px solid ${theme.palette.primary.default};
    }

    ${
      size == 'large' &&
      `
        ${theme.fontStyles.body1Bold}
      `
    };

    ${
      size == 'medium' &&
      `
        ${theme.fontStyles.body2Bold}
      `
    };

    ${
      size == 'small' &&
      `
        ${theme.fontStyles.body3Bold}
      `
    };
  `}
`;
