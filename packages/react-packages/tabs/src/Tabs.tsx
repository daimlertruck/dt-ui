import { BaseProps } from '@dt-ui/react-core';
import { Children, ReactElement, cloneElement, useMemo } from 'react';

import { TabItem, TabItemProps } from './components';
import { TabsStyled } from './Tabs.styled';

export type Variant = 'boxed' | 'book';

export interface TabsProps extends BaseProps {
  activeTab: string;
  variant?: Variant;
}

export const Tabs = ({
  children,
  dataTestId,
  style,
  activeTab,
  variant = 'boxed',
}: TabsProps) => {
  const clonedChildren = useMemo(
    () =>
      Children.map(children as ReactElement<TabItemProps>, (child) => {
        return (
          child && cloneElement(child, { ...child.props, activeTab, variant })
        );
      }),
    [children, activeTab, variant]
  );

  return (
    <TabsStyled
      data-testid={dataTestId ? dataTestId : 'tabs'}
      role='tablist'
      style={style}
    >
      {clonedChildren}
    </TabsStyled>
  );
};

Tabs.Item = TabItem;
