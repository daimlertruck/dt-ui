import { Box } from '@dt-ui/react-box';
import { BaseProps, useDebounceResize } from '@dt-ui/react-core';
import { Icon } from '@dt-ui/react-icon';
import {
  Children,
  cloneElement,
  ReactElement,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { TabItem, TabItemProps } from './components';
import { TabsStyled } from './Tabs.styled';
import { Variant } from './types';

const SCROLL_MOVEMENT = 120;
const SCROLL_OFFSET = 0.5;

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
  const ref = useRef<HTMLDivElement>(null);
  const [isLeftSideOverflowing, setIsLeftSideOverflowing] = useState(false);
  const [isRightSideOverflowing, setIsRightSideOverflowing] = useState(false);

  const clonedChildren = useMemo(
    () =>
      Children.map(children as ReactElement<TabItemProps>, (child) => {
        return (
          child &&
          cloneElement(child, {
            ...child.props,
            activeTab,
            variant,
          })
        );
      }),
    [children, activeTab, variant]
  );

  const handleScroll = (scrollOffset: number) => {
    if (!ref || !ref.current) return;

    const left = ref.current.scrollLeft + scrollOffset;
    ref.current.scroll({
      left,
      behavior: 'smooth',
    });

    calculateIfIsOverflowing(left);
  };

  const calculateIfIsOverflowing = (currentScrollLeft?: number) => {
    if (!ref || !ref.current) return;

    const scrollLeft = currentScrollLeft ?? ref.current.scrollLeft;

    setIsLeftSideOverflowing(scrollLeft > 0);
    setIsRightSideOverflowing(
      ref.current.clientWidth + scrollLeft + SCROLL_OFFSET <
        ref.current.scrollWidth
    );
  };

  useEffect(() => calculateIfIsOverflowing(), []);

  useDebounceResize(() => calculateIfIsOverflowing());

  return (
    <Box style={{ flexDirection: 'row' }}>
      <Icon
        code='keyboard_arrow_left'
        dataTestId='left-arrow'
        onClick={() => handleScroll(-SCROLL_MOVEMENT)}
        style={{
          visibility: isLeftSideOverflowing ? 'visible' : 'hidden',
        }}
      />
      <TabsStyled
        data-testid={dataTestId ? dataTestId : 'tabs'}
        ref={ref}
        role='tablist'
        style={style}
      >
        {clonedChildren}
      </TabsStyled>
      <Icon
        code='keyboard_arrow_right'
        dataTestId='right-arrow'
        onClick={() => handleScroll(SCROLL_MOVEMENT)}
        style={{
          visibility: isRightSideOverflowing ? 'visible' : 'hidden',
        }}
      />
    </Box>
  );
};

Tabs.Item = TabItem;
