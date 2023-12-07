import { useTheme } from '@emotion/react';
import { Children, ReactNode, RefObject, useCallback, useState } from 'react';

import { MoreIcon } from '../../../core';
import useDebounceResize from '../../../hooks/useDebounceResize';
import useMedia from '../../../hooks/useMedia';
import { Breadcrumb } from '../Breadcrumb';

const BREADCRUMB_HEIGHT_OFFSET_LIMIT = 40;

export const useCollapsedBreadcrumb = (
  children: ReactNode,
  breadcrumbRef: RefObject<HTMLElement | null>
) => {
  const theme = useTheme();
  const isDesktop = useMedia(`(min-width: ${theme.breakpoints.m})`);
  const [visibleChildren, setVisibleChildren] = useState<ReactNode>(children);

  const breadcrumbResize = useCallback(() => {
    if (isDesktop) {
      setVisibleChildren(children);
      return;
    }

    const childrenArray = Children.toArray(children);
    const breadcrumbHeight = breadcrumbRef.current?.offsetHeight ?? 0;
    const isBreadcrumbsTooLarge =
      breadcrumbHeight >= BREADCRUMB_HEIGHT_OFFSET_LIMIT && children;

    if (isBreadcrumbsTooLarge) {
      const modifiedChildren = [
        childrenArray[0],
        <Breadcrumb.Item key='more-icon' icon={<MoreIcon />} />,
        childrenArray[childrenArray.length - 1],
      ];

      setVisibleChildren(modifiedChildren);
    }
  }, [children, isDesktop, breadcrumbRef]);

  useDebounceResize(breadcrumbResize);

  return { visibleChildren };
};
