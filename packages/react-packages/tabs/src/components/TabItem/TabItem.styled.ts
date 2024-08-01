import styled from '@emotion/styled';

import { Variant } from '../../types';

interface TabItemStyledProps {
  active?: boolean;
  variant: Variant;
}

export const TabItemStyled = styled.button<TabItemStyledProps>`
  min-height: 50px;
  border: none;
  display: flex;
  align-items: center;

  ${({ theme, active, disabled, variant }) => `

    ${active ? theme.fontStyles.body2Bold : theme.fontStyles.body2}

    ${
      variant === 'book'
        ? `
          background-color: transparent;
          border-bottom: ${
            active
              ? `2px solid ${theme.palette.primary.default}`
              : `1px solid ${theme.palette.border.default}`
          };`
        : `
          background: ${
            active ? `${theme.palette.surface.contrast}` : 'transparent'
          };`
    }
    
    color: ${
      active
        ? theme.palette.primary.default
        : disabled
        ? theme.palette.content.light
        : theme.palette.content.default
    };
    padding: ${theme.spacing['3xs']} ${theme.spacing.s};
    cursor: ${active ? 'default' : disabled ? 'not-allowed' : 'pointer'};
    white-space: nowrap;

    ${
      !active &&
      !disabled &&
      `
      &:hover {
        ${
          variant === 'book'
            ? `color: ${theme.palette.primary.dark};`
            : `background: ${theme.palette.surface.contrast};`
        }        
      `
    }

    ${
      disabled &&
      `
        opacity: 0.4;
  
        &:active {
          pointer-events: none; 
        }
     `
    };
  `}
`;
