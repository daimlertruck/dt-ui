import styled from '@emotion/styled';

export const ContentStyled = styled.div`
  ${({ theme }) => `
    padding: ${theme.spacing.xs};
    overflow-y: auto;

    @media only screen and (max-width: ${theme.breakpoints.s}) {
      flex: 1;
      }
    `}
`;
