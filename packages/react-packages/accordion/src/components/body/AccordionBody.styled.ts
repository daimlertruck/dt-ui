import styled from '@emotion/styled';

interface BodyStyledProps {
  isOpenState: boolean;
}

export const BodyStyled = styled.div<BodyStyledProps>`
  ${({ theme, isOpenState }) => `
    padding: calc(${theme.spacing['2xs']} + ${theme.spacing['2xs']});
    padding-top: calc(${theme.spacing.none} + ${theme.spacing['2xs']});
    display: ${isOpenState ? 'block' : 'none'};

    @media only screen and (min-width: ${theme.breakpoints.s}) {
      padding:calc(${theme.spacing.xs} + ${theme.spacing['2xs']});
    }
  `}
`;
