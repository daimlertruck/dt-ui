import { MODAL_Z_INDEX } from '@dt-ui/react-core';
import styled from '@emotion/styled';

export const ModalStyled = styled.div`
  position: fixed;
  z-index: ${MODAL_Z_INDEX};
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;

  flex-direction: column;
  ${({ theme }) => `
      background-color: ${theme.palette.surface.contrast};
      border-radius: ${theme.shape.modal};
      box-shadow: ${theme.shadows.s};

      @media only screen and (min-width: ${theme.breakpoints.mq3}px)  {
        max-width: 100%;
        height: auto;
        width: auto;
        justify-content: normal;
      }

      @media only screen and (min-width: ${theme.breakpoints.mq3}px) and (max-width: ${theme.breakpoints.mq4}px) {
        max-width: 80%;
        min-width: 650px;
      }

      @media only screen and (min-width: ${theme.breakpoints.mq4}px) and (max-width: ${theme.breakpoints.mq6}px) {
        max-width: 60%;
        min-width: 650px;
      }

      @media only screen and (min-width: ${theme.breakpoints.mq6}px) {
        max-width: 50%;
        min-width: 650px;
      }
  `}
`;
