import { TABLE_HEADER_Z_INDEX } from '@dt-ui/react-core';
import styled from '@emotion/styled';

import { COLUMN_MIN_WIDTH } from '../../constants';
import { TextAlign } from '../../types';

interface ColumnHeaderStyled {
  textAlign?: TextAlign;
  showBoxShadow?: boolean;
  fixed?: boolean;
  fixedEnd?: boolean;
  fixedColumnIndex?: number;
  fixedEndColumnIndex?: number;
}
export const ColumnHeaderStyled = styled.th<ColumnHeaderStyled>`
  ${({
    theme,
    textAlign,
    showBoxShadow = false,
    fixed = false,
    fixedEnd = false,
    fixedColumnIndex = 0,
    fixedEndColumnIndex = 0,
  }) => `
    text-align: ${textAlign};
    color: ${theme.palette.content.heading};
    padding: 0 ${theme.spacing['2xs']} ${theme.spacing['2xs']};
    ${theme.fontStyles.button3};

    ${
      (fixed || fixedEnd) &&
      `
        left: ${fixed ? `${fixedColumnIndex * COLUMN_MIN_WIDTH}px` : 'unset'};
        right: ${
          fixedEnd ? `${fixedEndColumnIndex * COLUMN_MIN_WIDTH}px` : 'unset'
        };
        position: sticky;
        z-index: ${TABLE_HEADER_Z_INDEX};
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
