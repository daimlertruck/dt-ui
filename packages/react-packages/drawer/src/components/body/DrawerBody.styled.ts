import styled from '@emotion/styled';

export const DrawerContentStyled = styled.section`
  ${({ theme }) => `
    position: relative;
    overflow: auto;
    padding:  ${theme.spacing['2xs']} ${theme.spacing.xs} 0;
    
    @media only screen and (min-width: ${theme.breakpoints.s}px) {
      padding:  ${theme.spacing['2xs']} ${theme.spacing.s} 0;
    }
  `}
`;

export const ScrollableSectionObserverStyled = styled.div`
  position: absolute;
  margin-top: ${({ theme }) => theme.spacing['4xs']};
`;
