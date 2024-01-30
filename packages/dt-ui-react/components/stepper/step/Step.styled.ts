import styled from '@emotion/styled';

import { Colors } from '../../../types';

export const StepStyled = styled.li`
  display: flex;
  gap: 12px;
  align-items: center;
`;

interface LabelStyledProps {
  color: Colors | 'disabled';
}

export const LabelStyled = styled.span<LabelStyledProps>`
  ${({ theme, color }) => `
    ${theme.fontStyles.pSmall};
    color: ${
      color === 'disabled'
        ? theme.palette.content.disabled
        : theme.palette[color].default
    };
  `}
`;
