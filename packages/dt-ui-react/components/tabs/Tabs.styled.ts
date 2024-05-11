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
  ${({ orientation }) => tabsVariantStyles(orientation)};
`;

export const ItemStyled = styled.button<TabItemStyledProps>`
  border: none;

  display: flex;
  align-items: center;

  ${({ disabled, active }) => `
    cursor: ${disabled || active ? 'default' : 'pointer'};
    ${disabled && 'pointer-events: none; opacity: 0.4'};
  `}
  ${({ orientation, theme, active, hasError }) =>
    itemVariantStyles(orientation, theme, active, hasError)};
`;

export const PanelStyled = styled.div<TabPanelStyledProps>`
  ${({ visible, theme }) => `
    background-color: ${theme.colors.alpha.white};
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
