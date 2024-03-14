import { BaseProps } from '@dt-ui/react-core';
import { useRef } from 'react';

import { Variant } from '../../Tabs';

import { TabItemStyled } from './TabItem.styled';

export interface TabItemProps extends BaseProps {
  activeTab?: string;
  variant?: Variant;
  index: string;
  handleChange: (value: string) => void;
  isDisabled?: boolean;
}

export const TabItem = ({
  activeTab,
  children,
  dataTestId,
  isDisabled,
  index,
  variant = 'boxed',
  handleChange,
}: TabItemProps) => {
  const ref = useRef<HTMLButtonElement>(null);

  const handleOnClick = () => {
    if (!ref || !ref.current || !ref.current.parentElement) return;

    const elementClientRect = ref.current.getBoundingClientRect();
    const parentClientRect = ref.current.parentElement.getBoundingClientRect();

    if (elementClientRect.left < parentClientRect.left) {
      ref.current.parentElement.scroll({
        left:
          ref.current.parentElement.scrollLeft -
          (parentClientRect.left - elementClientRect.left),
        behavior: 'smooth',
      });
    }

    if (parentClientRect.right < elementClientRect.right) {
      ref.current.parentElement.scroll({
        left:
          ref.current.parentElement.scrollLeft +
          (elementClientRect.right - parentClientRect.right),
        behavior: 'smooth',
      });
    }

    handleChange(index);
  };

  return (
    <TabItemStyled
      active={activeTab === index}
      data-testid={dataTestId ? dataTestId : `tab-item-${index}`}
      disabled={isDisabled}
      onClick={handleOnClick}
      ref={ref}
      role='tab'
      tabIndex={activeTab === index ? 0 : -1}
      variant={variant}
    >
      {children}
    </TabItemStyled>
  );
};
