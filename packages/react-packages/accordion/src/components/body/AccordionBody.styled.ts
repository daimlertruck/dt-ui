import styled from '@emotion/styled';

interface BodyStyledProps {
  isOpenState: boolean;
}

export const BodyStyled = styled.div<BodyStyledProps>`
  ${({ theme, isOpenState }) => `
    padding: ${theme.spacing['2xs']};
    padding-top: ${theme.spacing.none};
    
    display: ${isOpenState ? 'block' : 'none'};

    @media only screen and (min-width: ${theme.breakpoints.s}) {
      padding: ${theme.spacing.xs};
      padding-top: ${theme.spacing.none};
    }
  `}
`;
