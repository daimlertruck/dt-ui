import styled from '@emotion/styled';

export const NavItemStyled = styled.li<{ matchRoute: boolean }>`
  ${({ theme, matchRoute }) => `
    ${theme.fontStyles.alpha.pSmall};
    display: inline-block;
    list-style: none;
    padding-left: 0px;

    a {
      color: ${theme.colors.alpha.white};
      cursor: pointer;
    }

    a:link,
    a:visited {
      color: ${matchRoute ? theme.palette.alpha.primary : ''};
    }
  `}
`;
