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
    ${theme.fontStyles.pSmall}

    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.grey_90};

    color: ${theme.colors.grey_300};

    resize: none;
    width: 100%;
    padding: 20px 14px 14px 14px;

    &:focus {
      outline: none !important;
    }
  `}
`;
