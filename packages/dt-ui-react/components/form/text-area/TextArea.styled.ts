import styled from '@emotion/styled';

export interface TextAreaStyledProps {
  hasError: boolean;
}

export const TextAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
  width: 100%;
`;

export const InputFieldIconStyled = styled.span`
  position: absolute;
  right: 7px;
  top: 14px;
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.palette.alpha.error};
`;

export const TextAreaStyled = styled.textarea<TextAreaStyledProps>`
  ${({ theme, hasError }) => `
    ${theme.fontStyles.alpha.pSmall}

    background-color: ${theme.colors.alpha.white};

    border: 1px solid ${theme.colors.alpha.gray_90};

    ${hasError && ` border-bottom:2px solid ${theme.palette.alpha.error}`};

    color: ${theme.colors.alpha.gray_300};

    resize: none;
    width: 100%;
    padding: 20px 14px 14px 14px;

    &:focus {
      outline: none !important;
    }
  `}
`;
