import styled from '@emotion/styled';

import { Variant } from './types';

interface TabsStyledProps {
  variant: Variant;
}

export const TabsStyled = styled.div`
  ${({ variant }: TabsStyledProps) => `
    display: flex;
    flex-direction: row;
    overflow: hidden;
    width: 100%;
    ${variant === 'default' && 'margin-bottom: -1px;'}
  `};
`;
