import styled from '@emotion/styled';

export const ContentStyled = styled.div`
  ${({ theme }) => `
    padding: ${theme.spacing.s};
    overflow-y: auto;
    position: relative;

    @media only screen and (max-width: ${theme.breakpoints.s}px) {
      flex: 1;
      }
    `}
`;
