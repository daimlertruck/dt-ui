import { Box } from '@dt-ui/react-box';
import { Meta, StoryFn } from '@storybook/react';

import { MenuIcon } from '../../core';
import { Counter } from '../counter';

import { useTabs } from './hooks';
import { Tabs, TabsProps } from './Tabs';

type TabsStoryProps = TabsProps & {
  tabName: string;
};

const Template: StoryFn<TabsStoryProps> = ({ tabName, variant }) => {
  const { activeTab, handleChange } = useTabs('first');

  return (
    <Tabs activeTab={activeTab} variant={variant}>
      <Tabs.Item handleChange={handleChange} index='first'>
        <Box style={{ flexDirection: 'row', gap: 4 }}>
          <MenuIcon />
          {tabName}
          <Counter>2</Counter>
        </Box>
      </Tabs.Item>
      <Tabs.Item handleChange={handleChange} index='second'>
        Tab 2
      </Tabs.Item>
      <Tabs.Item handleChange={handleChange} index='third'>
        Tab 3
      </Tabs.Item>
      <Tabs.Item handleChange={handleChange} index='fourth' isDisabled>
        Tab 4
      </Tabs.Item>
      <Tabs.Item handleChange={handleChange} index='fifth'>
        Tab 5
      </Tabs.Item>
    </Tabs>
  );
};

export const Default = {
  args: {
    tabName: 'Tab 1',
    variant: 'boxed',
  },
};

const meta: Meta<TabsStoryProps> = {
  title: 'Data Display/Tabs',
  component: Tabs,
  render: Template,
  parameters: {
    backgrounds: { default: 'light' },
  },
  argTypes: {
    variant: {
      options: ['book', 'boxed'],
      control: { type: 'radio' },
    },
  },
};

export default meta;
