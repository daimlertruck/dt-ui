import styled from '@emotion/styled';

interface HeaderStyled {
  isDisabled: boolean;
}

export const HeaderStyled = styled.header<HeaderStyled>`
  ${({ theme, isDisabled }) => `
    padding: ${theme.spacing['2xs']};
    padding-bottom: ${theme.spacing.none};
    cursor: ${isDisabled ? 'not-allowed' : 'pointer'};

    @media only screen and (min-width: ${theme.breakpoints.s}) {
      padding: ${theme.spacing.xs};
      padding-bottom: ${theme.spacing.none};
    }
  `}
`;

export const FlexContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => `
    padding-bottom: ${theme.spacing['2xs']};

    @media only screen and (min-width: ${theme.breakpoints.s}) {
      padding-bottom: ${theme.spacing.xs};
    }
  `}
`;

export const ChildrenContainerStyled = styled.div`
  width: 100%;
`;

export const IconContainerStyled = styled.div`
  width: 24px;
  height: 24px;

  ${({ theme }) => `
    margin-left: ${theme.spacing['3xs']};
    color: ${theme.palette.content.secondary}
  `}
`;
