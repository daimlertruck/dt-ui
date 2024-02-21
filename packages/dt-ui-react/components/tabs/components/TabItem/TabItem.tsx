import { BaseProps } from '@dt-ui/react-core';

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
  return (
    <TabItemStyled
      active={activeTab === index}
      data-testid={dataTestId ? dataTestId : `tab-item-${index}`}
      disabled={isDisabled}
      onClick={() => handleChange(index)}
      role='tab'
      tabIndex={activeTab === index ? 0 : -1}
      variant={variant}
    >
      {children}
    </TabItemStyled>
  );
};
