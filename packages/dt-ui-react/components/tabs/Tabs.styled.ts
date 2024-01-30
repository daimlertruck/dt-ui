import styled from '@emotion/styled';

import { Orientation } from '../../types';

import { itemVariantStyles, tabsVariantStyles } from './TabsVariants.styled';

interface TabItemStyledProps {
  orientation: Orientation;
  active?: boolean;
  hasError?: boolean;
}

interface TabPanelStyledProps {
  visible?: boolean;
}

export const TabsStyled = styled.div<Pick<TabItemStyledProps, 'orientation'>>`
  display: flex;
  flex-wrap: wrap;
  ${({ orientation, theme }) => tabsVariantStyles(orientation, theme)};
`;

export const ItemStyled = styled.button<TabItemStyledProps>`
  border: none;
  display: flex;
  align-items: center;

  ${({ orientation, theme, active, hasError, disabled }) =>
    itemVariantStyles(orientation, theme, active, hasError, disabled)};

  ${({ disabled, active, theme }) => `
    cursor: ${disabled ? 'not-allowed' : active ? 'default' : 'pointer'};
    ${
      disabled &&
      `
        background-color: ${theme.palette.base.light};
        color: ${theme.palette.content.disabled};
        opacity: 0.4;
        &:active {
          pointer-events: none; 
        }
     `
    };
  `}
`;

export const PanelStyled = styled.div<TabPanelStyledProps>`
  ${({ visible, theme }) => `
    background-color: ${theme.palette.base.default};
    padding: 32px;
    width: 100%;
    ${
      !visible &&
      `
        display : none;
      `
    };
  `}
`;

export const PanelGridStyled = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 190px auto;
  gap: 6px;
  overflow: hidden;
  overflow-wrap: break-word;
`;
