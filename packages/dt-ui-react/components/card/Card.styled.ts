import styled from '@emotion/styled';

export const CardStyled = styled.div`
  ${({ theme }) => `
    margin: ${theme.spacing.none};
    background-color: ${theme.colors.alpha.white};
    width: 100%;
    max-width: 530px;
    height: 100%;
    padding: 47px 24px 52px 24px;
    transition: all 0.2s ease-in-out;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    
    &::after {
      content: '';
      background-color: ${theme.palette.alpha.primary};
      border-radius: ${theme.spacing.xxsmall};
      width: 40px;
      height: 5px;
      margin-top: 14px;
    }

    &:hover {
      box-shadow: ${theme.shadows[1]};
    }
  `}
`;

export const CardTitleStyled = styled.div`
  width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;
`;

export const CardDetailStyled = styled.div`
  ${({ theme }) => `
    margin-top: ${theme.spacing.small};
    width: 100%;
    height: auto;
    max-height: ${theme.spacing.xlarge};
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
  `}
`;
