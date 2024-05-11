import styled from '@emotion/styled';

import { AlphaColors } from '../../../types';

interface ToggleStyledProps {
  checkedColor: AlphaColors;
  uncheckedColor: AlphaColors;
}
export const ToggleWrapperStyled = styled.div`
  position: relative;
  display: flex;
  gap: 4px;
  align-items: center;
`;

export const ToggleSwitchStyled = styled.label`
  position: absolute;
  width: 40px;
  height: 20px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.alpha.gray_100};
  cursor: pointer;
  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    margin: 2px;
    background: #ffffff;
    transition: 0.2s;
  }
`;

export const ToggleCheckBoxStyled = styled.input<ToggleStyledProps>`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 40px;
  height: 20px;
  cursor: pointer;

  &:disabled {
    cursor: auto;
  }

  &:checked + label {
    ${({ theme, disabled, checkedColor }) =>
      `
      background: ${
        disabled
          ? theme.colors.alpha.gray_100
          : theme.palette.alpha[checkedColor]
      };
    `}

    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 16px;
      height: 16px;
      margin-left: 22px;
      transition: 0.2s;
    }
  }
  &:disabled ~ span {
    color: ${({ theme }) => theme.colors.alpha.gray_100};
  }

  &:not(:checked) + label {
    ${({ theme, disabled, uncheckedColor }) =>
      `
      background: ${
        disabled
          ? theme.colors.alpha.gray_90
          : theme.palette.alpha[uncheckedColor]
      };
    `}
  }
`;
