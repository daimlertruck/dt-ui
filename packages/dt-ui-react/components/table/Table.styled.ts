import styled from '@emotion/styled';

import { TableVariant } from './constants';

interface TableStyledProps {
  isFixed?: boolean;
  variant?: TableVariant;
}

interface TableHeadStyledProps {
  variant?: TableVariant;
}

interface CellStyledProps {
  isVisible?: boolean;
  variant?: TableVariant;
}

interface RowStyledProps {
  selectableRow?: boolean;
}

export const TableStyled = styled.table<TableStyledProps>`
  ${({ isFixed, theme, variant }) => `
    ${theme.fontStyles.alpha.pSmall};
    border-collapse: separate;
    border-spacing: ${`0 ${theme.spacing.xsmall}`};
    width: 100%;
    table-layout: ${isFixed ? 'fixed' : 'auto'};

    ${
      variant === TableVariant.Basic &&
      `
        border-spacing: unset;
        border-collapse: collapse;
        border-radius: 3px;
        border-style: hidden; 
        box-shadow: 0 0 0 1px ${theme.colors.gray_90}; 

        tr:last-of-type td:last-child {
          border-bottom-right-radius: 3px;
        }

        tr:last-of-type td:first-child {
          border-bottom-left-radius: 3px;
        }
      `
    }
  `}
`;

export const TableHeadStyled = styled.thead<TableHeadStyledProps>`
  ${({ theme, variant }) => `
    border-bottom: none;

    tr:first-of-type {
      background-color: transparent;
      letter-spacing: ${theme.spacing.xxxsmall};

      &:hover {
        box-shadow: none;
      }
    };

    ${
      variant === TableVariant.Basic &&
      `
        background-color: ${theme.colors.gray_70};
      `
    }
  `}
`;

export const RowStyled = styled.tr<RowStyledProps>`
  ${({ theme, selectableRow }) => `
    background-color: ${theme.colors.white};
    color: ${theme.colors.gray_300};
    cursor: ${selectableRow ? 'pointer' : 'auto'};
    transition: all 0.2s ease-in-out;

    td:first-of-type {
      border-radius: 3px 0 0 3px;
    }
    td:last-of-type {
      border-radius: 0 3px 3px 0;
    }

    &:hover {
      box-shadow: ${selectableRow ? theme.shadows[1] : 'none'};
    };
  `}
`;

export const ColumnHeaderStyled = styled.th<{ variant?: TableVariant }>`
  ${({ theme, variant }) => `
    ${theme.fontStyles.alpha.h6};
    padding: 16px 16px 8px;
    text-align: left;
    text-transform: uppercase;

    ${
      variant === TableVariant.Basic &&
      `
        text-transform: none;
        border: 1px solid ${theme.colors.gray_90};
        white-space: normal;

        &:last-child {
          border-top-right-radius: 3px;
        }

        &:first-child {
          border-top-left-radius: 3px;
        }
      `
    }
  `}
`;

export const CellStyled = styled.td<CellStyledProps>`
  ${({ isVisible, theme, variant }) => `
    height: 50px;
    max-width: calc(100vw / 10);
    overflow: ${isVisible ? 'visible' : 'hidden'};
    padding: 12px 16px;
    text-overflow: ellipsis;
    white-space: nowrap;

    &:first-of-type {
      border-left: ${`6px solid ${theme.palette.alpha.primary}`};
    }

    &:nth-of-type(1) {
      max-width: 20vw;
    }

    &:nth-of-type(2) {
      max-width: 20vw;
    }

    &:last-child {
      text-overflow: clip;
      max-width: 50vw;
      width: 1px;
      overflow: visible;
    }

    ${
      variant === TableVariant.Basic &&
      `
        border: 1px solid ${theme.colors.gray_90};
        text-overflow: unset;
        white-space: normal;
        max-width: unset;

        &:first-of-type {
          border-left: 1px solid ${theme.colors.gray_90};
        };

        &:nth-of-type(1) {
          max-width: unset;
        }
    
        &:nth-of-type(2) {
          max-width: unset;
        }
    
        &:last-child {
          text-overflow: unset;
          max-width: unset;
          width: auto;
        }
      `
    }
  `}
`;
