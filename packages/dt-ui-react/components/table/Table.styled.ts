import styled from '@emotion/styled';

interface TableStyledProps {
  isFixed?: boolean;
}

interface CellStyledProps {
  columnWidth?: string;
  textAlign?: TextAlign;
}

interface RowStyledProps {
  selectableRow?: boolean;
}

interface ColumnHeaderStyled {
  textAlign?: TextAlign;
}

export type TextAlign = 'left' | 'right' | 'center';

export const TableStyled = styled.table<TableStyledProps>`
  ${({ isFixed }) => `
    table-layout: ${isFixed ? 'fixed' : 'auto'};
    width: 100%;
    border-spacing: 0;
  `}
`;

export const TableBodyStyled = styled.tbody`
  ${({ theme }) => `
    display: grid;
    grid-template-columns: 1fr;
    gap: ${theme.spacing['3xs']};
    
    tr:hover {
      background-color: ${theme.palette.neutralLight_100};
    }

    @media (min-width: ${theme.breakpoints.s}) {
      grid-template-columns: 1fr 1fr;
    }

    @media (min-width: ${theme.breakpoints.m}) {
      display: table-header-group;
    }
  `}
`;

export const TableHeadStyled = styled.thead`
  ${({ theme }) => `
    display: none;

    tr {
      background: transparent;
    }

    @media (min-width: ${theme.breakpoints.m}) {
      display: table-header-group;
    }
`}
`;

export const RowStyled = styled.tr<RowStyledProps>`
  ${({ theme, selectableRow = true }) => `
    display: block;
    padding: ${theme.spacing.xs};
    width: 100%;
    background-color: ${theme.colors.white};
    border-radius: ${theme.radius['4xs']};
    box-shadow: ${theme.shadows.s};
    cursor: ${selectableRow ? 'pointer' : 'auto'};
    flex: 1;

    @media (min-width: ${theme.breakpoints.m}) {
      display: table-row;
      border-radius: ${theme.radius.none};
      box-shadow: ${theme.shadows.none};
      padding: ${theme.spacing.none};
    }

  `}
`;

export const ColumnHeaderStyled = styled.th<ColumnHeaderStyled>`
  ${({ theme, textAlign }) => `
    text-align: ${textAlign};
    color: ${theme.palette.textPrimary};
    padding: 0 ${theme.spacing['2xs']} ${theme.spacing['2xs']};
    ${theme.fontStyles.button2};
  `}
`;

export const CellStyled = styled.td<CellStyledProps>`
  ${({ theme, columnWidth, textAlign }) => `
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${theme.spacing['3xs']};
    padding: ${theme.spacing['3xs']} ${theme.spacing['2xs']};
    word-break: break-word;
    text-align: ${textAlign};
    color: ${theme.palette.textSecondary};
    ${theme.fontStyles.body2};

    &:not(:first-of-type){
      &:before {
        content: attr(data-label);
        color: ${theme.palette.textPrimary};
        word-break: keep-all;
        ${theme.fontStyles.button2};
      }
    }

    &:first-of-type {
      color: ${theme.palette.textPrimary};
      border-bottom: 1px solid ${theme.palette.neutral};
      padding-top: 0;
      ${theme.fontStyles.body2Bold};
    }

    @media (min-width: ${theme.breakpoints.m}) {
      display: table-cell;      
      border-top: 1px solid ${theme.palette.neutral};
      padding: ${theme.spacing['2xs']};
      max-width: 0;
      ${theme.fontStyles.body2};
      
      &:first-of-type {
        color: ${theme.palette.textSecondary};
        padding-top: ${theme.spacing['2xs']};
        border-bottom: none;
        ${theme.fontStyles.body2};
      }

      &:before {
        display: none;
      }
      
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      ${
        !!columnWidth &&
        `
        white-space: unset;
        word-break: break-word;
        width: ${columnWidth};
        max-width: ${columnWidth};
      `
      }
    }

  `}
`;
