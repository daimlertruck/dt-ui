import styled from '@emotion/styled';

import { ListStyleType } from '../../utils';

interface ListStyledProps {
  listStyleType?: ListStyleType;
  hasMarginLeft?: boolean;
  hasPaddingLeft?: boolean;
}

export const ListStyled = styled.ul<ListStyledProps>`
  ${({
    listStyleType = ListStyleType.Disc,
    theme,
    hasMarginLeft,
    hasPaddingLeft = true,
  }) => `
    padding: ${theme.spacing.none};
    padding-left: ${hasPaddingLeft ? '50px' : 'unset'};
    list-style-type: ${listStyleType};

    ${
      hasMarginLeft &&
      `
        margin-left: 1em;
        padding-left: 0px;
      `
    }
  `}
`;

export const CounterListItemStyled = styled.li`
  ${({ theme }) => `
    ${theme.fontStyles.pSmall}
    margin-bottom: ${theme.spacing.xmedium};
    display: flex;
    align-items: center;
    gap: 12px;
    color: ${theme.colors.grey_300};

    &:last-of-type {
      margin-bottom: 0;
    }
  `}
`;
