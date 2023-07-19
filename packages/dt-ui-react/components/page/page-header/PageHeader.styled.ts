import styled from '@emotion/styled';

import { Direction } from '../../../types';
import { PageType } from '../constants';

interface PageHeaderStyledProps {
  variant?: PageType;
  direction: Direction;
}

interface SegmentStyledProps {
  isAlignToRight: boolean;
}

export const PageHeaderStyled = styled.header<PageHeaderStyledProps>`
  ${({ theme, variant, direction }) => `
    align-items: center;
    width: 100%;
    display: flex;
    flex-flow: ${direction} nowrap;
    justify-content: space-between;

    ${
      variant === PageType.Detail &&
      `
        background-color: ${theme.colors.white};
        min-height: 228px;
        padding: 48px 32px 40px 32px;
        box-shadow: ${theme.shadows[0.5]};
      `
    };
  `}
`;

export const SegmentStyled = styled.div<SegmentStyledProps>`
  width: 100%;

  ${({ isAlignToRight }) => `
    ${
      isAlignToRight &&
      `
        display: flex;
        justify-content: right;
        gap: 20px;
      `
    }
  `}
`;

export const DescriptionStyled = styled.div`
  max-width: 50vw;
  margin-top: 16px;
`;
