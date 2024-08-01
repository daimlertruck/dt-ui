import styled from '@emotion/styled';

export const EmptyStateStyled = styled.div`
  ${({ theme }) => `
    padding: ${theme.spacing.l} ${theme.spacing.s};
    background-color: ${theme.palette.surface.light};
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${theme.shape.emptyState};
    border: 1px dashed ${theme.palette.border.default};
    width: 100%;
    height: 100%;
    gap: ${theme.spacing.xs};
    
    @media only screen and (min-width: ${theme.breakpoints.s}) {
      padding: ${theme.spacing['2xl']} ${theme.spacing['5xl']};
    }
  `}
`;

export const EmptyStateContentStyled = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  ${({ theme }) => `
      gap: ${theme.spacing['4xs']};

      @media only screen and (min-width: ${theme.breakpoints.s}) {
        gap: ${theme.spacing['3xs']};
      }
  `}
`;
