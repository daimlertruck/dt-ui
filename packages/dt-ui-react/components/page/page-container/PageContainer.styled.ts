import styled from '@emotion/styled';

import { PageType } from '../constants';

interface PageContainerStyledProps {
  pageType: PageType;
}

export const PageContainerStyled = styled.div<PageContainerStyledProps>`
  ${({ pageType, theme }) => `
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: ${theme.breakpoints.xxl};
    height: auto;
    margin: 0 auto;
    min-height: 95vh;
    padding: 150px 0 50px 0;

    ${
      pageType === PageType.Detail &&
      `
        padding: 100px 0px;
      `
    }
  `}
`;
