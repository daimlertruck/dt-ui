import styled from '@emotion/styled';

import { TextAlign } from '../../types';

interface ColumnHeaderStyled {
  textAlign?: TextAlign;
}
export const ColumnHeaderStyled = styled.th<ColumnHeaderStyled>`
  ${({ theme, textAlign }) => `
    text-align: ${textAlign};
    color: ${theme.palette.content.heading};
    padding: 0 ${theme.spacing['2xs']} ${theme.spacing['2xs']};
    ${theme.fontStyles.button3};
  `}
`;
