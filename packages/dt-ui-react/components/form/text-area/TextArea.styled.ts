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

    background-color: ${theme.palette.base.default};
    border: 1px solid ${theme.palette.border.default};

    color: ${theme.palette.content.body};

    resize: none;
    width: 100%;
    padding: 20px 14px 14px 14px;

    &:focus {
      outline: none !important;
    }
  `}
`;
