import styled from '@emotion/styled';

interface TableStyledProps {
  isFixed?: boolean;
}

interface CellStyledProps {
  columnWidth?: string;
}

interface RowStyledProps {
  selectableRow?: boolean;
}

export const TableStyled = styled.table<TableStyledProps>`
  ${({ theme, isFixed }) => `
  table-layout: ${isFixed ? 'fixed' : 'auto'};
  width: 100%;
  border-spacing: 0;
  background: ${theme.colors.white};
  `}
`;

export const TableBodyStyled = styled.tbody`
  ${({ theme }) => `
  tr:hover {
    background-color: ${theme.palette.neutralLight_100}}
  }
  `}
`;

export const RowStyled = styled.tr<RowStyledProps>`
  ${({ theme, selectableRow = true }) => `
    display: table-row;
    cursor: ${selectableRow ? 'pointer' : 'auto'};
    color: ${theme.palette.textSecondary};
  `}
`;

export const ColumnHeaderStyled = styled.th`
  ${({ theme }) => `
    ${theme.fontStyles.body4Bold};
    text-transform: uppercase;
    text-align: left;
    color: ${theme.palette.textPrimary};
    padding: 0 ${theme.spacing['2xs']} ${theme.spacing['2xs']};
  `}
`;

export const CellStyled = styled.td<CellStyledProps>`
  ${({ theme, columnWidth }) => `
      display: table-cell;      
      ${theme.fontStyles.body2};
      border-top: 1px solid ${theme.palette.neutral};
      padding: ${theme.spacing['2xs']};
      max-width: 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      ${
        columnWidth &&
        `
        white-space: unset;
        word-break: break-word;
        width: ${columnWidth};
        max-width: ${columnWidth};
      `
      }
  `}
`;
