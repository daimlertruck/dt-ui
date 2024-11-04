import styled from '@emotion/styled';

export const HeaderStyled = styled.header`
  ${({ theme }) => `
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0 ${theme.spacing.xs} ${theme.spacing['2xs']};

    &:has(+.hasScroll) {
      box-shadow: ${theme.shadows.xs};
    }

    @media only screen and (min-width: ${theme.breakpoints.s}px) {
      padding: 0 ${theme.spacing.s} ${theme.spacing['2xs']};
    }
  `}
`;
