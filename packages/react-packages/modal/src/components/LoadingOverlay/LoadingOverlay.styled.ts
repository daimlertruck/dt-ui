import { hexToRgba } from '@dt-ui/react-core';
import styled from '@emotion/styled';

export const ModalLoadingOverlayStyled = styled.div`
  ${({ theme }) =>
    `
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: ${hexToRgba(theme.palette.surface.light, 0.8)};
      display: flex;
      align-items: center;
      justify-content: center;
  `}
`;
