import { withProviders } from '@dt-ui/react-core';
import { fireEvent, render } from '@testing-library/react';
import { Fragment } from 'react';

import { Tabs } from './Tabs';
import { Variant } from './types';

describe('<Tabs /> component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should match the snapshot by displaying boxed variant', () => {
    const handleChange = jest.fn();

    const { container } = renderComponent(handleChange);

    expect(container).toMatchSnapshot();
  });

  it('should match the snapshot by displaying book variant', () => {
    const handleChange = jest.fn();

    const { container } = renderComponent(handleChange, 'book');

    expect(container).toMatchSnapshot();
  });

  it('should display side icons', () => {
    const handleChange = jest.fn();

    Object.defineProperty(HTMLElement.prototype, 'scrollLeft', {
      writable: true,
      value: 10,
    });

    Object.defineProperty(HTMLElement.prototype, 'clientWidth', {
      writable: true,
      value: 10,
    });

    Object.defineProperty(HTMLElement.prototype, 'scrollWidth', {
      writable: true,
      value: 100,
    });

    const { getByTestId } = renderComponent(handleChange);

    expect(getByTestId('left-arrow')).toHaveStyle({ visibility: 'visible' });
    expect(getByTestId('right-arrow')).toHaveStyle({ visibility: 'visible' });
  });

  it('should handle scroll after right side icon click', () => {
    const handleChange = jest.fn();
    const scroll = jest.fn();

    Object.defineProperty(HTMLElement.prototype, 'scroll', {
      writable: true,
      value: scroll,
    });

    const { getByTestId } = renderComponent(handleChange);

    fireEvent.click(getByTestId('right-arrow'));

    expect(scroll).toHaveBeenCalled();
  });

  it('should handle scroll after left side icon click', () => {
    const handleChange = jest.fn();
    const scroll = jest.fn();

    Object.defineProperty(HTMLElement.prototype, 'scroll', {
      writable: true,
      value: scroll,
    });

    const { getByTestId } = renderComponent(handleChange);

    fireEvent.click(getByTestId('left-arrow'));

    expect(scroll).toHaveBeenCalled();
  });

  it('should trigger handle change after item click', () => {
    const handleChange = jest.fn();

    const { getByTestId } = renderComponent(handleChange);

    fireEvent.click(getByTestId('tab-item-first'));

    expect(handleChange).toHaveBeenCalled();
  });
});

const renderComponent = (
  handleChange: () => void,
  variant: Variant = 'boxed'
) => {
  const ProvidedFragment = withProviders(Fragment);

  return render(
    <ProvidedFragment>
      <Tabs activeTab='first' variant={variant}>
        <Tabs.Item handleChange={handleChange} index='first'>
          Tab 1
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
      </Tabs>
    </ProvidedFragment>
  );
};
