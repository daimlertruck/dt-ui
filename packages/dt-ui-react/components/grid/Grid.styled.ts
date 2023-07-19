import styled from '@emotion/styled';

interface GridStyledProps {
  gridTemplateColumns?: string;
}

export const GridStyled = styled.div<GridStyledProps>`
  ${({ theme, gridTemplateColumns = 'repeat(3, minmax(0, 1fr))' }) => `
    padding: ${theme.spacing.none};
    margin: ${theme.spacing.none};
    display: grid;
    grid-gap: ${theme.spacing.medium};
    padding-top: ${theme.spacing.large};
    width: 100%;

    /* Small screen specific styles */
    @media only screen and (max-width: ${theme.breakpoints.md}) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  
    /* Mid screen specific styles */
    @media only screen and (min-width: ${theme.breakpoints.md}) {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    @media only screen and (min-width: ${theme.breakpoints.lg}) {
      grid-template-columns: ${gridTemplateColumns};
    }
  `}
`;
