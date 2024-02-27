import styled from '@emotion/styled';

import { TextAlign } from '../../types';

interface CellStyledProps {
  columnWidth?: string;
  textAlign?: TextAlign;
}

export const CellStyled = styled.td<CellStyledProps>`
  ${({ theme, columnWidth, textAlign }) => `
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${theme.spacing['3xs']};
    padding: ${theme.spacing['3xs']} ${theme.spacing['2xs']};
    word-break: break-word;
    text-align: ${textAlign};
    color: ${theme.palette.content.body};
    ${theme.fontStyles.body2};

    &:first-of-type {
      border-bottom: 1px solid ${theme.palette.border.light};
      padding-top: 0;

      .header-cell {
        display: none;
      }
    }

    @media (min-width: ${theme.breakpoints.m}) {
      display: table-cell;      
      border-top: 1px solid ${theme.palette.border.light};
      padding: ${theme.spacing['2xs']};
      ${theme.fontStyles.body2};
      
      &:first-of-type {
        color: ${theme.palette.content.body};
        padding-top: ${theme.spacing['2xs']};
        border-bottom: none;
        ${theme.fontStyles.body2};
      }

      word-break: break-word;

      ${
        !!columnWidth &&
        `
        width: ${columnWidth};
        max-width: ${columnWidth};
      `
      }
    }
  `}
`;

export const CellWithHeaderStyled = styled.div`
  ${({ theme }) => `
    word-break: keep-all;
    color: ${theme.palette.content.heading};
    ${theme.fontStyles.button3};

    @media (min-width: ${theme.breakpoints.m}) {
        display: none;
    }
  `}
`;
