import styled from '@emotion/styled';

interface HeaderProps {
  hasBackgroundColor: boolean;
  hasBorder: boolean;
}

export const HeaderStyled = styled.div<HeaderProps>`
  display: flex;
  flex-direction: column;
  border-radius: inherit;

  ${({ theme, hasBackgroundColor, hasBorder }) => `
    padding: ${theme.spacing.xs};
    background-color: ${
      hasBackgroundColor ? theme.palette.surface.light : 'transparent'
    };
    border-bottom: ${
      hasBorder ? `1px solid ${theme.palette.border.default}` : 'none'
    };
    gap: ${theme.spacing['4xs']};

    @media only screen and (min-width: ${theme.breakpoints.s}) {
      padding-top: ${theme.spacing.s};
    }

    button {
      color: ${theme.palette.content.default};
    }

    svg {
      cursor: pointer;
    }
  `}
`;
