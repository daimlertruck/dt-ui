import { BaseProps, Orientation } from '@dt-ui/react-core';
import { useMemo, Children, ReactElement, cloneElement } from 'react';

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
      data-testid={dataTestId ? dataTestId : 'tabs'}
      orientation={orientation}
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
      active={activeTab === index}
      data-testid={dataTestId ? dataTestId : `tab-item-${index}`}
      disabled={isDisabled}
      hasError={hasError}
      onClick={() => handleChange(index)}
      orientation={orientation}
      role='tab'
      tabIndex={activeTab === index ? 0 : -1}
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
      data-testid={dataTestId ? dataTestId : `tab-panel-${index}`}
      role='tabpanel'
      style={style}
      tabIndex={activeTab === index ? 0 : -1}
      visible={activeTab === index}
    >
      {children}
    </PanelStyled>
  );
};

TabPanel.Grid = ({ children, dataTestId }: BaseProps) => {
  return (
    <PanelGridStyled data-testid={dataTestId ? dataTestId : 'tab-panel-grid'}>
      {children}
    </PanelGridStyled>
  );
};
