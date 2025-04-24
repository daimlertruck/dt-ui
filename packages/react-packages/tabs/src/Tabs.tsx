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
  activeTab: number;
  variant?: Variant;
  handleChange: (value: number) => void;
}

export const Tabs = ({
  children,
  style,
  activeTab,
  dataTestId = 'tabs',
  variant = 'default',
  handleChange,
}: TabsProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isLeftSideOverflowing, setIsLeftSideOverflowing] = useState(false);
  const [isRightSideOverflowing, setIsRightSideOverflowing] = useState(false);

  const clonedChildren = useMemo(
    () =>
      Children.map(children as ReactElement<TabItemProps>, (child, index) => {
        return (
          child &&
          cloneElement(child, {
            ...child.props,
            activeTab,
            variant,
            index,
            handleChange,
          })
        );
      }),
    [children, activeTab, variant, handleChange]
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
          ...(!isLeftSideOverflowing && {
            display: 'none',
          }),
        }}
      />
      <TabsStyled
        data-testid={dataTestId}
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
          ...(!isRightSideOverflowing && {
            display: 'none',
          }),
        }}
      />
    </Box>
  );
};

Tabs.Item = TabItem;
