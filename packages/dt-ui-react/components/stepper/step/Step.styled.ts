import styled from '@emotion/styled';

import { CustomTheme as Theme } from '../../../types';

export const StepStyled = styled.li`
  display: flex;
  gap: 12px;
  align-items: center;
`;

interface LabelStyledProps {
  color: keyof Theme['palette']['alpha'];
}

export const LabelStyled = styled.span<LabelStyledProps>`
  ${({ theme, color }) => `
    ${theme.fontStyles.alpha.pSmall};
    color: ${theme.palette.alpha[color]};
  `}
`;
