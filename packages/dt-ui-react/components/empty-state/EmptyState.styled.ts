import styled from '@emotion/styled';

export const EmptyStateStyled = styled.div`
  ${({ theme }) => `
    padding: ${theme.spacing.l} ${theme.spacing.s};
    background-color: ${theme.colors.gray_10};
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${theme.spacing['4xs']};
    border: 1px dashed ${theme.colors.gray_30};
    width: 100%;
    height: 100%;
    
    @media only screen and (min-width: ${theme.breakpoints.s}) {
      padding: ${theme.spacing['2xl']} ${theme.spacing['5xl']};
    }
  `}
`;

export const EmptyStateDescriptionStyled = styled.div`
  ${({ theme }) => `
    text-align: center;
    padding-top: ${theme.spacing['4xs']};
  `}
`;

export const EmptyStateTitleStyled = styled.div`
  text-align: center;
`;
