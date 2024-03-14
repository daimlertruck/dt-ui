import styled from '@emotion/styled';

export const TableBodyStyled = styled.tbody`
  ${({ theme }) => `
    display: table-header-group;
    
    tr:hover td {
      background-color: ${theme.palette.base.light};
    }
  `}
`;
