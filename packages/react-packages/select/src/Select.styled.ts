import { DROPDOWN_MENU_Z_INDEX } from '@dt-ui/react-core';
import styled from '@emotion/styled';

export const SelectStyled = styled.div`
  position: relative;
`;

export interface SelectFieldStyledProps {
  hasError: boolean;
  disabled?: boolean;
  isActive: boolean;
}

export const SelectFieldStyled = styled.div`
  display: flex;
  height: auto;
  width: 100%;
  position: relative;
  flex-direction: column;
  overflow: hidden;
`;

export interface LabelFieldProps {
  isActive: boolean;
  disabled?: boolean;
}

export const SelectMenuStyled = styled.ul<{ isOpen: boolean }>`
  list-style-type: none;
  position: absolute;
  z-index: ${DROPDOWN_MENU_Z_INDEX};
  width: 100%;

  ${({ isOpen, theme }) => `
    margin-top:${theme.spacing['5xs']};
    padding:  ${theme.spacing['2xs']} ${theme.spacing.none};
    background-color: ${theme.palette.surface.contrast};
    display: ${isOpen ? 'block' : 'none'};
    border-radius: ${theme.shape.formField};
  `}
`;

export const SelectValueContainerStyled = styled.div`
  display: flex;
  flex: 1;
  align-self: end;
  overflow: hidden;
`;

export const SelectValueStyled = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${({ theme }) => `
    ${theme.fontStyles.body2}
    color: ${theme.palette.content.default};
  `}
`;

export const SelectContainerStyled = styled.div<SelectFieldStyledProps>`
  transition: all 0.2s ease-in-out;
  width: 100%;
  height: 53px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme, hasError, disabled }) => `
    ${theme.fontStyles.body2}
    color: ${
      disabled ? theme.palette.content.light : theme.palette.content.default
    };
    padding: ${theme.spacing['4xs']} ${theme.spacing['3xs']};
    gap: ${theme.spacing['4xs']} ;
    background-color: ${theme.palette.surface.contrast};
    border-radius: ${theme.shape.formField};
    cursor: ${disabled ? 'not-allowed' : 'pointer'};

    &:hover, &:focus {
      ${
        !disabled &&
        `border: 1px solid ${
          hasError ? theme.palette.error.default : theme.palette.primary.default
        };`
      };
    }
  `};

  border: ${({ theme, isActive, hasError, disabled }) => {
    if (isActive) {
      return `1px solid ${theme.palette.primary.default}`;
    }
    if (hasError) {
      return `1px solid ${theme.palette.error.default}`;
    }
    return `1px solid ${
      disabled ? theme.palette.border.light : theme.palette.border.default
    }`;
  }};
`;

export const SelectActionContainerStyled = styled.div`
  display: flex;
`;

export const HelperSelectFieldMessageStyled = styled.div`
  ${({ theme }) => `
    padding-left: ${theme.spacing['2xs']};
  `}
`;
