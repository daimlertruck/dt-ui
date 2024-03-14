import { TABLE_HEADER_Z_INDEX } from '@dt-ui/react-core';
import styled from '@emotion/styled';

import { COLUMN_MIN_WIDTH } from '../../constants';
import { TextAlign } from '../../types';

interface CellStyledProps {
  columnWidth?: string;
  textAlign?: TextAlign;
  showBoxShadow?: boolean;
  fixed?: boolean;
  fixedEnd?: boolean;
  fixedColumnIndex?: number;
  fixedEndColumnIndex?: number;
}

export const CellStyled = styled.td<CellStyledProps>`
  ${({
    theme,
    columnWidth,
    textAlign,
    showBoxShadow = false,
    fixed = false,
    fixedEnd = false,
    fixedColumnIndex = 0,
    fixedEndColumnIndex = 0,
  }) => `
    display: table-cell;
    min-width: ${COLUMN_MIN_WIDTH}px;
    word-break: break-word;
    border-top: 1px solid ${theme.palette.border.light};
    padding: ${theme.spacing['2xs']};
    text-align: ${textAlign};
    color: ${theme.palette.content.body};
    ${theme.fontStyles.body2};

    &:first-of-type {
      padding-top: ${theme.spacing['2xs']};
      border-bottom: none;
    }

    ${
      !!columnWidth &&
      `
        width: ${columnWidth};
        max-width: ${columnWidth};
      `
    }

    ${
      (fixed || fixedEnd) &&
      `
        z-index: ${TABLE_HEADER_Z_INDEX};
        left: ${fixed ? `${fixedColumnIndex * COLUMN_MIN_WIDTH}px` : 'unset'};
        right: ${
          fixedEnd ? `${fixedEndColumnIndex * COLUMN_MIN_WIDTH}px` : 'unset'
        };
        position: sticky;
        background: ${theme.palette.primary.contrast};
        box-shadow: ${
          showBoxShadow
            ? `${fixedEnd ? '-1px' : '1px'} 0 0 0 ${theme.palette.border.light}`
            : 'unset'
        };
      `
    }
  `}
`;
