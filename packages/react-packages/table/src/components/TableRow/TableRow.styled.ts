import styled from '@emotion/styled';

interface RowStyledProps {
  selectableRow: boolean;
}

export const RowStyled = styled.tr<RowStyledProps>`
  ${({ theme, selectableRow }) => `
    display: table-row;
    border-radius: ${theme.radius.none};
    box-shadow: ${theme.shadows.none};
    padding: ${theme.spacing.none};
    width: 100%;
    background-color: ${theme.palette.base.default};
    cursor: ${selectableRow ? 'pointer' : 'auto'};
  `}
`;
