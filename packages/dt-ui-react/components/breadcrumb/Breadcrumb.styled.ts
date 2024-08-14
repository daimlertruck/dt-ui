import styled from '@emotion/styled';

export const BreadcrumbStyled = styled.nav`
  ${({ theme }) => theme.fontStyles.alpha.pXSmall}
  color: ${({ theme }) => theme.colors.alpha.gray_100};
`;

export const ListStyled = styled.ul`
  padding: 0px;
  margin: 0px;
  display: flex;
  flex-direction: row;
  list-style: none;
`;

export const ItemStyled = styled.li`
  &:last-child {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  &:not(:last-child):after {
    content: '/';
    padding: 8px;
  }
`;

export const AnchorStyled = styled.a`
  color: ${({ theme }) => theme.palette.alpha.primary};
  text-decoration: underline;
`;
