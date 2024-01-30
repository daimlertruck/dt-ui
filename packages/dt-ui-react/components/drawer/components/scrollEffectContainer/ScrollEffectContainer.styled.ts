import styled from '@emotion/styled';

export const ScrollEffectContainerStyled = styled.div`
  ${({ theme }) => `
    width: 100%;
    height: ${theme.spacing.xs};
    position: fixed;
    padding: ${theme.spacing.none} ${theme.spacing.xs};
    display: flex;
    align-items: center;
    justify-content: center;

    @media only screen and (min-width: ${theme.breakpoints.s}) {
      height: ${theme.spacing.s};
      padding: ${theme.spacing.none} ${theme.spacing.s};
    }
  `}
`;

export const ScrollEffectStyled = styled.div`
  ${({ theme }) => `
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, ${theme.palette.base.default}, transparent);
  `}
`;
