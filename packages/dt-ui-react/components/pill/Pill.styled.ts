import styled from '@emotion/styled';

import { AlphaColors } from '../../types';

export interface PillStyledProps {
  color: AlphaColors;
}

export const PillStyled = styled.span<PillStyledProps>`
  ${({ theme, color }) => `
    ${theme.fontStyles.alpha.tag}
    padding: 2px 8px;
    color: ${theme.colors.white};
    border: ${theme.spacing.none};
    border-radius: 60px;
    text-transform: uppercase;
    text-align: center;
    background-color: ${theme.palette.alpha[color]};
    display: block;
    width: 80px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  `}
`;
