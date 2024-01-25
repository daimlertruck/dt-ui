import styled from '@emotion/styled';

export const HeaderStyled = styled.header`
  ${({ theme }) => `
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    padding: ${theme.spacing.none} ${theme.spacing.xs} ${theme.spacing.xs}
      ${theme.spacing.xs};
    background-color: ${theme.colors.white};
    border-radius: ${theme.radius['3xs']} ${theme.radius.none}
      ${theme.radius.none} ${theme.radius.none};

    @media only screen and (min-width: ${theme.breakpoints.s}) {
      padding: ${theme.spacing.none} ${theme.spacing.s} ${theme.spacing.s}
        ${theme.spacing.s};
    }
  `}
`;
