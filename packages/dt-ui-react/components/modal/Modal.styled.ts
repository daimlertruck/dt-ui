import styled from '@emotion/styled';

import { MODAL_Z_INDEX } from '../../constants';
import { hexToRgba } from '../../utils';

export interface HeaderProps {
  hasBackgroundColor: boolean;
  hasBorder: boolean;
}

export interface FooterProps {
  hasBackgroundColor: boolean;
  hasBorder: boolean;
}

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
      background-color: ${theme.colors.white};
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

export const ModalLoadingOverlay = styled.div`
  ${({ theme }) =>
    `
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: ${hexToRgba(theme.colors.grey_10, 0.8)};
      display: flex;
      align-items: center;
      justify-content: center;
  `}
`;

export const HeaderStyled = styled.div<HeaderProps>`
  display: flex;
  flex-direction: column;

  ${({ theme, hasBackgroundColor, hasBorder }) => `
    padding: ${theme.spacing.xs};
    background-color: ${
      hasBackgroundColor ? theme.colors.grey_10 : 'transparent'
    };
    border-bottom: ${hasBorder ? `1px solid ${theme.colors.grey_30}` : 'none'};
    gap: ${theme.spacing['4xs']};

    @media only screen and (min-width: ${theme.breakpoints.s}) {
      padding-top: ${theme.spacing.s};
    }

    button {
      color: ${theme.palette.neutralDark_500};
    }

    svg {
      cursor: pointer;
    }
  `}
`;

export const HeaderWrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ContentStyled = styled.div`
  ${({ theme }) => `
    padding: ${theme.spacing.xs};
    overflow-y: auto;

    @media only screen and (max-width: ${theme.breakpoints.s}) {
      flex: 1;
      }
    `}
`;

export const FooterStyled = styled.div<FooterProps>`
  display: flex;
  justify-content: end;
  align-items: center;

  ${({ theme, hasBackgroundColor, hasBorder }) => `
      background-color: ${
        hasBackgroundColor ? theme.colors.grey_10 : 'transparent'
      };
      border-top: ${hasBorder ? `1px solid ${theme.colors.grey_30}` : 'none'};
      gap: ${theme.spacing['3xs']};
      padding: ${theme.spacing.xs};
      @media only screen and (max-width: ${theme.breakpoints.s}) {
        flex-direction: column-reverse;
       }
  `}
`;
