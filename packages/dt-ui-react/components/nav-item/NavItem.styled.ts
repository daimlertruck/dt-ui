import styled from '@emotion/styled';

export const NavItemStyled = styled.li<{ matchRoute: boolean }>`
  ${({ theme, matchRoute }) => `
    ${theme.fontStyles.pSmall};
    display: inline-block;
    list-style: none;
    padding-left: 0px;

    a {
      color: ${theme.palette.primary.contrast};
      cursor: pointer;
    }

    a:link,
    a:visited {
      color: ${matchRoute ? theme.palette.primary.default : ''};
    }
  `}
`;
