import { render, renderHook, act } from '@testing-library/react';
import React, { Fragment } from 'react';

import { withProviders } from '../../utils';

import { useTabs } from './hooks';
import { Tabs, TabPanel } from './Tabs';

describe('Tabs', () => {
  describe('<Tabs /> component', () => {
    const ProvidedFragment = withProviders(Fragment);

    describe('when orientation is horizontal', () => {
      it('should match the snapshot by displaying the content from Tab 1', () => {
        const handleChange = jest.fn();
        const activeTab = 'first';
        const { container } = render(
          <ProvidedFragment>
            <Tabs>
              <Tabs.Item
                activeTab={activeTab}
                handleChange={handleChange}
                index='first'
              >
                Tab 1
              </Tabs.Item>
              <Tabs.Item
                activeTab={activeTab}
                handleChange={handleChange}
                index='second'
              >
                Tab 2
              </Tabs.Item>
              <Tabs.Item
                activeTab={activeTab}
                handleChange={handleChange}
                index='third'
              >
                Tab 3
              </Tabs.Item>
              <Tabs.Item
                activeTab={activeTab}
                handleChange={handleChange}
                index='fourth'
                isDisabled
              >
                Tab 4
              </Tabs.Item>
            </Tabs>
            <TabPanel activeTab={activeTab} index='first'>
              <TabPanel.Grid>
                <p>Testing tab panel grid:</p>
                <p>Tab 1 content</p>
              </TabPanel.Grid>
            </TabPanel>
            <TabPanel activeTab={activeTab} index='second'>
              Tab 2 content
            </TabPanel>
            <TabPanel activeTab={activeTab} index='third'>
              Tab 3 content
            </TabPanel>
          </ProvidedFragment>
        );

        expect(container).toMatchSnapshot();
      });
    });

    describe('when orientation is vertical', () => {
      it('should match the snapshot by displaying the content from Tab 1', () => {
        const handleChange = jest.fn();
        const activeTab = 'first';
        const { container } = render(
          <ProvidedFragment>
            <Tabs orientation='vertical'>
              <Tabs.Item
                activeTab={activeTab}
                handleChange={handleChange}
                index='first'
              >
                Tab 1
              </Tabs.Item>
              <Tabs.Item
                activeTab={activeTab}
                handleChange={handleChange}
                index='second'
              >
                Tab 2
              </Tabs.Item>
              <Tabs.Item
                activeTab={activeTab}
                handleChange={handleChange}
                index='third'
              >
                Tab 3
              </Tabs.Item>
              <Tabs.Item
                activeTab={activeTab}
                handleChange={handleChange}
                index='fourth'
                isDisabled
              >
                Tab 4
              </Tabs.Item>
            </Tabs>
            <TabPanel activeTab={activeTab} index='first'>
              <TabPanel.Grid>
                <p>Testing tab panel grid:</p>
                <p>Tab 1 content</p>
              </TabPanel.Grid>
            </TabPanel>
            <TabPanel activeTab={activeTab} index='second'>
              Tab 2 content
            </TabPanel>
            <TabPanel activeTab={activeTab} index='third'>
              Tab 3 content
            </TabPanel>
          </ProvidedFragment>
        );

        expect(container).toMatchSnapshot();
      });

      it('should match the snapshot by displaying the red tab', () => {
        const handleChange = jest.fn();
        const activeTab = 'first';
        const { container } = render(
          <ProvidedFragment>
            <Tabs orientation='vertical'>
              <Tabs.Item
                activeTab={activeTab}
                handleChange={handleChange}
                hasError
                index='first'
              >
                Tab 1
              </Tabs.Item>
            </Tabs>
            <TabPanel activeTab={activeTab} index='first'>
              <TabPanel.Grid>
                <p>Testing tab panel grid:</p>
                <p>Tab 1 content</p>
              </TabPanel.Grid>
            </TabPanel>
          </ProvidedFragment>
        );

        expect(container).toMatchSnapshot();
      });
    });
  });

  describe('useTabs hook', () => {
    let hook;
    const initialTab = 'first';
    beforeEach(() => {
      hook = renderHook(() => useTabs(initialTab));
    });

    it('should change active tab', () => {
      act(() => {
        hook.result.current.handleChange('second');

        expect(hook.result.current.activeTab).toEqual(initialTab);
      });
    });
  });
});
