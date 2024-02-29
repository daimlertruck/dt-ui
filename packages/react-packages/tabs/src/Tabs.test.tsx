import { withProviders } from '@dt-ui/react-core';
import { render } from '@testing-library/react';
import { Fragment } from 'react';

import { Tabs } from './Tabs';

describe('<Tabs /> component', () => {
  const ProvidedFragment = withProviders(Fragment);

  it('should match the snapshot by displaying boxed variant', () => {
    const handleChange = jest.fn();
    const activeTab = 'first';

    const { container } = render(
      <ProvidedFragment>
        <Tabs activeTab='first'>
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
      </ProvidedFragment>
    );

    expect(container).toMatchSnapshot();
  });

  it('should match the snapshot by displaying book variant', () => {
    const handleChange = jest.fn();
    const activeTab = 'first';

    const { container } = render(
      <ProvidedFragment>
        <Tabs activeTab='first' variant='book'>
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
      </ProvidedFragment>
    );

    expect(container).toMatchSnapshot();
  });
});
