import styled from '@emotion/styled';

export const NavContainerStyled = styled.div`
  margin: ${({ theme }) => theme.spacing.none};
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row-reverse;
  min-width: 80%;
`;
