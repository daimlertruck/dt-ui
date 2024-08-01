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

    background-color: ${theme.palette.surface.contrast};
    border-radius: ${theme.shape.formField};

    // Change border based on input status
    border: ${
      hasError
        ? `1px solid ${theme.palette.error.default}`
        : `1px solid ${
            disabled ? theme.palette.border.light : theme.palette.border.default
          }`
    };

    color: ${
      disabled ? theme.palette.content.light : theme.palette.content.default
    };
    min-width: 198px;
    padding: 20px 15px 5px 15px;
    transition: all 0.2s ease-in-out;
    width: 100%;
    height: 53px;

    &:focus {
      outline: 1px solid ${theme.palette.primary.default};
      border: 1px solid transparent;
    }
  `}
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
