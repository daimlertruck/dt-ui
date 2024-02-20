import styled from '@emotion/styled';

interface TableStyledProps {
  isFixed?: boolean;
}

export const TableStyled = styled.table<TableStyledProps>`
  ${({ isFixed }) => `
    table-layout: ${isFixed ? 'fixed' : 'auto'};
    width: 100%;
    border-spacing: 0;
  `}
`;
