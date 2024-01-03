import styled from '@emotion/styled';

export const BreadcrumbStyled = styled.nav`
  ${({ theme }) => `
    ${theme.fontStyles.body2}
    color: ${theme.palette.textSecondary};
    margin-bottom: ${theme.spacing['3xs']};
    overflow: hidden;
  `}
`;

export const ListStyled = styled.ul`
  padding: 0px;
  margin: 0px;
  width: 100%;
  list-style: none;
  display: flex;
  align-items: center;
  white-space: nowrap;
  gap: ${({ theme }) => theme.spacing['4xs']};
`;

export const ItemStyled = styled.li`
  ${({ theme }) => `
    display: flex;

    &:not(:last-child) {
      ${theme.fontStyles.link2}
      color: ${theme.palette.primary};
      cursor: pointer;
      
      & * {
        text-decoration: underline;
      }
      
      &:hover {
        color: ${theme.palette.primaryDark_300};
      }
    }

    a {
      color: inherit;
    }

    &:hover {
      svg {
        color: ${theme.palette.textPrimary};
      }
    }

    svg {
      color: ${theme.palette.textSecondary};
    }

    &:last-child * {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  `}
`;

export const ItemContainerStyled = styled.div`
  ${({ theme }) => `
    display: flex;
    align-items: center;
    gap: ${theme.spacing['5xs']};
  `}
`;
