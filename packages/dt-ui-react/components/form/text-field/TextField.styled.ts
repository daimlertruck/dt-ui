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

    background-color: ${disabled ? theme.colors.gray_70 : theme.colors.white};
    border: 1px solid ${theme.colors.gray_90};

    // Change border based on input status
    border-bottom: ${
      hasError
        ? `2px solid ${theme.palette.error}`
        : `1px solid ${theme.colors.gray_90}`
    };

    color: ${disabled ? theme.colors.gray_100 : theme.colors.gray_300};
    min-width: 198px;
    padding: 20px 15px 5px 15px;
    transition: all 0.2s ease-in-out;
    width: 100%;
    height: 53px;

    &:focus {
      ${
        !hasError &&
        `
          border-bottom: 2px solid ${theme.palette.primary};
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
  color: ${({ theme }) => theme.palette.error};
`;

export const TextFieldMessageStyled = styled.div`
  padding-left: 15px;
`;
