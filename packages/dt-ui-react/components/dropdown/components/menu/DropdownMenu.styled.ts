import styled from '@emotion/styled';

import { DROPDOWN_MENU_Z_INDEX } from '../../../../constants';

export const DropdownMenuStyled = styled.ul`
  ${({ theme }) => `
    background: ${theme.palette.base.default};
    border: 1px solid ${theme.palette.border.default};
    border-radius: ${theme.shape.dropdown};
    width: 100%;
    padding:${theme.spacing['4xs']} ${theme.spacing.none};
    margin: ${theme.spacing['6xs']} ${theme.spacing.none};
    position: absolute;
    right: 0;
    z-index: ${DROPDOWN_MENU_Z_INDEX};
    max-height: 180px;
    overflow: auto;
  `}
`;
