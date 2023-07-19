import { Story } from '@storybook/react';

import { Orientation } from '../../types';

import { useTabs } from './hooks';
import { Tabs, TabPanel } from './Tabs';

export default {
  title: 'Data Display/Tabs',
  component: Tabs,
  parameters: {
    backgrounds: { default: 'light' },
  },
};

const Template: Story<{
  tabName: string;
  tabPanelGridTitle: string;
  tabPanelGridSubtitle: string;
  orientation: Orientation;
}> = ({ tabName, tabPanelGridTitle, tabPanelGridSubtitle, orientation }) => {
  const { activeTab, handleChange } = useTabs('first');

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: orientation === 'horizontal' ? 'column' : 'row',
      }}
    >
      <Tabs orientation={orientation}>
        <Tabs.Item
          index='first'
          handleChange={handleChange}
          activeTab={activeTab}
        >
          {tabName}
        </Tabs.Item>
        <Tabs.Item
          index='second'
          handleChange={handleChange}
          activeTab={activeTab}
        >
          Tab 2
        </Tabs.Item>
        <Tabs.Item
          index='third'
          handleChange={handleChange}
          activeTab={activeTab}
        >
          Tab 3
        </Tabs.Item>
        <Tabs.Item
          index='fourth'
          handleChange={handleChange}
          activeTab={activeTab}
          isDisabled={true}
        >
          Tab 4
        </Tabs.Item>
        <Tabs.Item
          index='fifth'
          handleChange={handleChange}
          activeTab={activeTab}
          hasError={true}
        >
          Tab 5
        </Tabs.Item>
      </Tabs>
      <TabPanel activeTab={activeTab} index='first'>
        <TabPanel.Grid>
          <p>{tabPanelGridTitle}</p>
          <p>{tabPanelGridSubtitle}</p>
        </TabPanel.Grid>
      </TabPanel>
      <TabPanel activeTab={activeTab} index='second'>
        Tab 2 content
      </TabPanel>
      <TabPanel activeTab={activeTab} index='third'>
        Tab 3 content
      </TabPanel>
      <TabPanel activeTab={activeTab} index='fifth'>
        Tab 5 content
      </TabPanel>
    </div>
  );
};

export const Default = Template.bind({});

Default.args = {
  tabName: 'Tab 1',
  tabPanelGridTitle: 'Testing tab panel grid:',
  tabPanelGridSubtitle: 'Tab 1 content',
  orientation: 'horizontal',
};
