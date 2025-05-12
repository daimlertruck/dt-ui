import styled from '@emotion/styled';

interface FooterStyledProps {
  isFixed?: boolean;
}

export const FooterStyled = styled.footer<FooterStyledProps>`
  ${({ theme, isFixed }) => `
    ${theme.fontStyles.alpha.pXSmall}
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: start;
    max-width:  ${theme.breakpoints.xxl}px;
    width: 90%;
    bottom: 0;
    margin-top: auto;
    margin-left: auto;
    margin-right: auto;
    min-height: 5vh;
    position: ${isFixed ? 'fixed' : 'static'};

    ${
      isFixed &&
      `
        left: 50%;
        transform: translateX(-50%);
      `
    }
  `}
`;

export const FooterItemStyled = styled.li`
  display: inline-block;
  list-style: none;
  padding: 0px;
  white-space: nowrap;

  a {
    color: ${({ theme }) => theme.colors.alpha.gray_200};
  }
`;
