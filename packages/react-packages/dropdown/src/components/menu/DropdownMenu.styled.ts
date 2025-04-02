import { DROPDOWN_MENU_Z_INDEX } from '@dt-ui/react-core';
import styled from '@emotion/styled';

export const DropdownMenuStyled = styled.ul`
  ${({ theme }) => `
    background: ${theme.palette.surface.contrast};
    border: 1px solid ${theme.palette.border.default};
    border-radius: ${theme.shape.dropdown};
    width: 100%;
    padding:${theme.spacing['2xs']} ${theme.spacing.none};
    margin: ${theme.spacing['5xs']} ${theme.spacing.none};
    position: absolute;
    right: 0;
    z-index: ${DROPDOWN_MENU_Z_INDEX};
    max-height: 180px;
    overflow: auto;
  `}
`;
