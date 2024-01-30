import styled from '@emotion/styled';

import { Colors } from '../../../types';

interface ToggleStyledProps {
  checkedColor: Colors;
  uncheckedColor: Colors;
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
  background: ${({ theme }) => theme.palette.base.light};
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
          ? theme.palette.base.light
          : theme.palette[checkedColor].default
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
    color: ${({ theme }) => theme.palette.content.disabled};
  }

  &:not(:checked) + label {
    ${({ theme, disabled, uncheckedColor }) =>
      `
      background: ${
        disabled
          ? theme.palette.base.light
          : theme.palette[uncheckedColor].default
      };
    `}
  }
`;
