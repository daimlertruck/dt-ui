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
    ${theme.fontStyles.pSmall}

    background-color: ${
      disabled ? theme.palette.base.light : theme.palette.base.default
    };
    border: 1px solid ${theme.palette.border.default};

    // Change border based on input status
    border-bottom: ${
      hasError
        ? `2px solid ${theme.palette.error.default}`
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

    &:focus {
      ${
        !hasError &&
        `
          border-bottom: 2px solid ${theme.palette.primary.default};
          outline: none;
        `
      }
    }
  `}
`;

export const InputFieldIconStyled = styled.span`
  position: absolute;
  right: 15px;
  top: 15px;
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.palette.error.default};
`;

export const TextFieldMessageStyled = styled.div`
  padding-left: 15px;
`;
