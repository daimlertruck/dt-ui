import styled from '@emotion/styled';

import { hexToRgba } from '../../utils';

export const OverlayStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  background: ${({ theme }) => hexToRgba(theme.colors.gray_300, 0.6)};
`;

export const ModalStyled = styled.div`
  width: 50%;
  max-width: 825px;
  position: fixed;
  z-index: 10;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
`;

export const HeaderStyled = styled.div`
  ${({ theme }) => `
    ${theme.fontStyles.h5};
    font-weight: 700;
    color: ${theme.colors.gray_300};
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: ${theme.spacing.large};
    margin-bottom: ${theme.spacing.none};
    padding-bottom: ${theme.spacing.xmedium};
    border-bottom: ${`1px solid ${theme.colors.gray_90}`};
    text-transform: uppercase;

    svg {
      cursor: pointer;
    }
  `}
`;

export const ContentStyled = styled.div`
  padding: ${({ theme }) => theme.spacing.large};
`;

export const FooterStyled = styled.div`
  ${({ theme }) => `
      display: flex;
      justify-content: space-between;
      align-item: center;
      padding: ${theme.spacing.xmedium} ${theme.spacing.large};
      background-color: ${theme.colors.gray_70};
    `}
`;
