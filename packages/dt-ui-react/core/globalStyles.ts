import { css, Theme } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';

// Pass theme as argument
export const globalStyles = (theme: Theme) => css`
  ${emotionNormalize}

  *,
  *:before,
  *:after {
    box-sizing: inherit;
    padding: 0;
    margin: 0;
  }
  *:focus {
    outline: none;
  }

  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: ${theme.fontFamily.default};
    box-sizing: border-box;
  }

  body {
    color: ${theme.colors.gray_200};
    background-color: ${theme.colors.gray_70};
    font-family: ${theme.fontFamily.default};
    width: 100%;
    min-height: 100vh;

    ${theme.fontStyles.p}
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  .swagger-ui .info {
    margin: 0px;
  }

  .swagger-ui .scheme-container:has(.servers) {
    display: none;
  }
`;
