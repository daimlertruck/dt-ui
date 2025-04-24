import styled from '@emotion/styled';

import { Variant } from '../../types';

interface TabItemStyledProps {
  active?: boolean;
  variant: Variant;
}

export const TabItemStyled = styled.button<TabItemStyledProps>`
  border: none;
  display: flex;
  align-items: center;

  ${({ theme, active, disabled, variant }) => `

    ${active ? theme.fontStyles.body2Bold : theme.fontStyles.body2}

    ${
      variant === 'default'
        ? `
          background-color: transparent;
          border-bottom: ${
            active
              ? `2px solid ${theme.palette.accent.default}`
              : `1px solid ${theme.palette.border.default}`
          };`
        : `
          background-color: ${
            active ? theme.palette.surface.contrast : 'transparent'
          };`
    }
    
    color: ${
      disabled ? theme.palette.content.light : theme.palette.accent.default
    };
    padding: ${theme.spacing['3xs']} ${theme.spacing.s};
    cursor: ${active ? 'default' : disabled ? 'not-allowed' : 'pointer'};
    white-space: nowrap;
    gap: ${theme.spacing['4xs']};
    
    ${
      !active &&
      !disabled &&
      `
        &:hover {
          background-color: ${theme.palette.accent.light};
        }        
      `
    }
  `}
`;
