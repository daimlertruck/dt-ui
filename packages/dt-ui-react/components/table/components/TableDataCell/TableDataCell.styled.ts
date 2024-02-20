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
    &:not(:first-of-type){
      &:before {
        content: attr(data-label);
        color: ${theme.palette.content.heading};
        word-break: keep-all;
        ${theme.fontStyles.button2};
      }
    }
    &:first-of-type {
      color: ${theme.palette.content.heading};
      border-bottom: 1px solid ${theme.palette.border.light};
      padding-top: 0;
      ${theme.fontStyles.body2Bold};
    }
    @media (min-width: ${theme.breakpoints.m}) {
      display: table-cell;      
      border-top: 1px solid ${theme.palette.border.light};
      padding: ${theme.spacing['2xs']};
      max-width: 0;
      ${theme.fontStyles.body2};
      
      &:first-of-type {
        color: ${theme.palette.content.body};
        padding-top: ${theme.spacing['2xs']};
        border-bottom: none;
        ${theme.fontStyles.body2};
      }
      &:before {
        display: none;
      }
      
      word-break: break-word;
      ${
        !!columnWidth &&
        `
        white-space: unset;
        width: ${columnWidth};
        max-width: ${columnWidth};
      `
      }
    }
  `}
`;
