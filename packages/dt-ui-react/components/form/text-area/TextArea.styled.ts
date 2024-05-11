import styled from '@emotion/styled';

export const TextAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
  width: 100%;
`;

export const TextAreaStyled = styled.textarea`
  ${({ theme }) => `
    ${theme.fontStyles.alpha.pSmall}

    background-color: ${theme.colors.alpha.white};
    border: 1px solid ${theme.colors.alpha.gray_90};

    color: ${theme.colors.alpha.gray_300};

    resize: none;
    width: 100%;
    padding: 20px 14px 14px 14px;

    &:focus {
      outline: none !important;
    }
  `}
`;
