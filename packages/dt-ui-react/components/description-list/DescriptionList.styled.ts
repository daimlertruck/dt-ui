import styled from '@emotion/styled';

import { ListStyleType } from '../../utils';

interface DescriptionListStyledProps {
  listStyleType: ListStyleType;
}

export const DescriptionListStyled = styled.dl<DescriptionListStyledProps>`
  ${({ theme, listStyleType }) => `
    padding: ${theme.spacing.none};
    padding-left: 10px;
    margin-left: 1em;
    list-style-type: ${listStyleType};
  `}
`;

export const TermStyled = styled.dt`
  ${({ theme }) => theme.fontStyles.pSmall};
  font-weight: 700;
  margin-bottom: 10px;
  display: list-item;
`;

export const DescriptionStyled = styled.dd`
  margin-bottom: 10px;
  padding-left: 20px;
`;
