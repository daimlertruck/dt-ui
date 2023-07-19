import { useMemo, Children, ReactElement, cloneElement } from 'react';

import { BaseProps, Orientation } from '../../types';

import {
  TabsStyled,
  ItemStyled,
  PanelStyled,
  PanelGridStyled,
} from './Tabs.styled';

export interface TabsProps extends BaseProps {
  orientation?: Orientation;
}

type OrientationProps =
  | {
      orientation?: 'vertical';
      hasError?: boolean;
    }
  | {
      orientation?: 'horizontal';
      hasError: false;
    };

export type TabItemProps = {
  activeTab: string;
  index: string;
  handleChange: (value: string) => void;
  isDisabled?: boolean;
} & BaseProps &
  OrientationProps;

export interface TabPanelProps extends BaseProps {
  activeTab: string;
  index: string;
}

export const Tabs = ({
  children,
  dataTestId,
  orientation = 'horizontal',
  style,
}: TabsProps) => {
  const clonedChildren = useMemo(
    () =>
      Children.map(children as ReactElement<TabItemProps>, (child) => {
        return (
          child &&
          cloneElement(child, {
            ...child.props,
            orientation,
          } as TabItemProps)
        );
      }),
    [children, orientation]
  );

  return (
    <TabsStyled
      orientation={orientation}
      data-testid={dataTestId ?? 'tabs'}
      role='tablist'
      style={style}
    >
      {clonedChildren}
    </TabsStyled>
  );
};

Tabs.Item = ({
  activeTab,
  children,
  dataTestId,
  isDisabled,
  hasError,
  index,
  handleChange,
  orientation = 'horizontal',
}: TabItemProps) => {
  return (
    <ItemStyled
      data-testid={dataTestId ?? `tab-item-${index}`}
      active={activeTab === index}
      onClick={() => handleChange(index)}
      disabled={isDisabled}
      role='tab'
      orientation={orientation}
      tabIndex={activeTab === index ? 0 : -1}
      hasError={hasError}
    >
      {children}
    </ItemStyled>
  );
};

export const TabPanel = ({
  style,
  activeTab,
  children,
  dataTestId,
  index,
}: TabPanelProps) => {
  return (
    <PanelStyled
      data-testid={dataTestId ?? `tab-panel-${index}`}
      visible={activeTab === index}
      role='tabpanel'
      tabIndex={activeTab === index ? 0 : -1}
      style={style}
    >
      {children}
    </PanelStyled>
  );
};

TabPanel.Grid = ({ children, dataTestId }: BaseProps) => {
  return (
    <PanelGridStyled data-testid={dataTestId ?? 'tab-panel-grid'}>
      {children}
    </PanelGridStyled>
  );
};
