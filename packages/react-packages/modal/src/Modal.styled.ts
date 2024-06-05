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
      background-color: ${theme.palette.base.default};
      border-radius: ${theme.shape.modal};
      box-shadow: ${theme.shadows.s};

      @media only screen and (min-width: ${theme.breakpoints.s})  {
        min-width: 30%;
        height: auto;
        width: auto;
        justify-content: normal;
      }

      @media only screen and (min-width: ${theme.breakpoints.s}) and (max-width: ${theme.breakpoints.m}) {
        max-width: 80%;
      }

      @media only screen and (min-width: ${theme.breakpoints.m}) and (max-width: ${theme.breakpoints.xl}) {
        max-width: 60%;
      }

      @media only screen and (min-width: ${theme.breakpoints.xl}) {
        max-width: 50%;
      }
  `}
`;
