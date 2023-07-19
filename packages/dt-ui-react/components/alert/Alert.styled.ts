import styled from '@emotion/styled';

import { AlertType } from './constants';

interface AlertStyledProps {
  type: AlertType;
}

export const AlertStyled = styled.div<AlertStyledProps>`
  ${({ type, theme }) => `
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 16px 14px;
    gap: 18px;
    border: 2px solid ${theme.palette[type]};
    border-radius: 2px;
  `}
`;

export const AlertIconStyled = styled.div<AlertStyledProps>`
  width: 24px;
  height: 24px;
  color: ${({ theme, type }) => theme.palette[type]};
  mix-blend-mode: normal;
`;

export const AlertContentStyled = styled.div`
  ${({ theme }) => `
    ${theme.fontStyles.pSmall};
    color: ${theme.colors.gray_300};
    height: 100%;
  `}
`;
