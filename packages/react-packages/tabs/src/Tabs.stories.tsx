import { Box } from '@dt-ui/react-box';
import { Icon } from '@dt-ui/react-icon';
import { Meta, StoryFn } from '@storybook/react';

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
          <Icon code='menu' color='inherit' />
          {tabName}
          <span>2</span>
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
      <Tabs.Item handleChange={handleChange} index='six'>
        Tab 6
      </Tabs.Item>
      <Tabs.Item handleChange={handleChange} index='seven'>
        Tab 7
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
