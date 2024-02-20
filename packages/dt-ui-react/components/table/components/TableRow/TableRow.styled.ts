import styled from '@emotion/styled';

interface RowStyledProps {
  selectableRow?: boolean;
}

export const RowStyled = styled.tr<RowStyledProps>`
  ${({ theme, selectableRow = true }) => `
    display: block;
    padding: ${theme.spacing.xs};
    width: 100%;
    background-color: ${theme.palette.base.default};
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
