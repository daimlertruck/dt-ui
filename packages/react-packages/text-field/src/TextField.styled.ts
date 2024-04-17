import styled from '@emotion/styled';

export interface InputFieldStyledProps {
  hasError: boolean;
  disabled?: boolean;
}

export const TextFieldStyled = styled.div`
  display: block;
  height: auto;
  width: 100%;
  position: relative;
`;

export const InputFieldStyled = styled.input<InputFieldStyledProps>`
  ${({ theme, hasError, disabled }) => `
    ${theme.fontStyles.body2}

    background-color: ${
      disabled ? theme.palette.base.light : theme.palette.base.default
    };
    border-radius: ${theme.shape.formField};

    // Change border based on input status
    border: ${
      hasError
        ? `1px solid ${theme.palette.error.default}`
        : `1px solid ${theme.palette.border.default}`
    };

    color: ${
      disabled ? theme.palette.content.disabled : theme.palette.content.body
    };
    min-width: 198px;
    padding: 20px 15px 5px 15px;
    transition: all 0.2s ease-in-out;
    width: 100%;
    height: 53px;
  `}
`;

export const LabelTextRequiredStyled = styled.span<{ hasError: boolean }>`
  color: ${({ theme, hasError }) =>
    hasError ? theme.palette.error.default : theme.palette.content.secondary};
`;

export const InputFieldIconStyled = styled.span`
  position: absolute;
  right: 15px;
  top: 15px;
  width: 24px;
  height: 24px;
`;

export const TextFieldMessageStyled = styled.div`
  padding-left: 15px;
`;
