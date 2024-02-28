import styled from '@emotion/styled';

import { checkboxStyles } from './utils/checkboxStyles';

export interface CheckBoxInputWrapperProps {
  isChecked: boolean;
  isDisabled: boolean;
}

export interface CheckboxLabelStyledProps {
  isDisabled: boolean;
  isChecked: boolean;
}

export const CheckboxStyled = styled.div<CheckBoxInputWrapperProps>`
  display: inline-flex;
  align-items: center;

  ${({ theme, isChecked, isDisabled }) => `
    & > div {
      border-radius: ${theme.shape.checkbox};
      ${checkboxStyles(theme, isChecked, isDisabled)}
    }

    &:hover > div {
      ${
        !isDisabled &&
        !isChecked &&
        `
         background-color: ${theme.palette.primary.light};
         border: 1px solid ${theme.palette.primary.default};
      `
      };
     }
  `}
`;

export const CheckBoxInputWrapper = styled.div`
  height: 24px;
  width: 24px;
  position: relative;
  display: flex;
`;

export const CheckboxInputStyled = styled.input`
  cursor: pointer;
  appearance: none;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;

  &:disabled {
    cursor: not-allowed;
  }
`;

export const CheckboxLabelStyled = styled.label<CheckboxLabelStyledProps>`
  user-select: none;

  ${({ theme, isDisabled }) => `
    padding-left: ${theme.spacing['4xs']};
    ${theme.fontStyles.body2};
    color: ${
      isDisabled ? theme.palette.content.disabled : theme.palette.content.body
    };
    cursor: ${isDisabled ? 'not-allowed' : 'pointer'};
  `}
`;
