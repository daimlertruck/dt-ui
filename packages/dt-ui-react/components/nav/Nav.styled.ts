import styled from '@emotion/styled';

export const NavStyled = styled.nav`
  margin: ${({ theme }) => theme.spacing.none};
`;

export const NavListStyled = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 48px;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    gap: 20px;
  }
`;
