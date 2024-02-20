import { TABLE_HEADER_Z_INDEX } from '@dt-ui/react-core';
import styled from '@emotion/styled';

interface TableHeadStyledProps {
  hasFixedHeader?: boolean;
}

export const TableHeadStyled = styled.thead<TableHeadStyledProps>`
  ${({ theme, hasFixedHeader }) => `
    display: none;
    tr {
      background: transparent;
    }
    @media (min-width: ${theme.breakpoints.m}) {
      display: table-header-group;
      ${
        hasFixedHeader &&
        `
          position: sticky;
          top: 0;
          background-color: ${theme.palette.base.default};
          z-index: ${TABLE_HEADER_Z_INDEX};
          box-shadow: 0 1px 0 rgba(0, 0, 0, 0.05)
        `
      }
    }
`}
`;
