import styled from '@emotion/styled';

export const DrawerContentStyled = styled.div`
  ${({ theme }) => `
    padding: ${theme.spacing.xs};

    @media only screen and (min-width: ${theme.breakpoints.s}) {
      padding: ${theme.spacing.s};
    }
  `}
`;
