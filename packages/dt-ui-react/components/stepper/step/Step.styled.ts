import styled from '@emotion/styled';

import { CustomTheme as Theme } from '../../../types';

export const StepStyled = styled.li`
  display: flex;
  gap: 12px;
  align-items: center;
`;

interface LabelStyledProps {
  color: keyof Theme['palette'];
}

export const LabelStyled = styled.span<LabelStyledProps>`
  ${({ theme, color }) => `
    ${theme.fontStyles.pSmall};
    color: ${theme.palette[color]};
  `}
`;
