import styled from '@emotion/styled';

export const TableBodyStyled = styled.tbody`
  ${({ theme }) => `
    display: grid;
    grid-template-columns: 1fr;
    gap: ${theme.spacing['3xs']};
    
    tr:hover {
      background-color: ${theme.palette.base.light};
    }
    @media (min-width: ${theme.breakpoints.s}) {
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: ${theme.breakpoints.m}) {
      display: table-header-group;
    }
  `}
`;
