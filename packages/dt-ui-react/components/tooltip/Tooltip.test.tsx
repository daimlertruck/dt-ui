import {
  render,
  fireEvent,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import React from 'react';

import { withProviders, withTooltipProvider } from '../../utils';

import { TooltipDirection } from './constants';
import Tooltip from './Tooltip';

describe('<Tooltip /> component', () => {
  const ProvidedTooltip = withProviders(withTooltipProvider(Tooltip));

  it('renders a tooltip correctly', async () => {
    const { getByTestId } = render(
      <ProvidedTooltip>
        Hover me
        <Tooltip.Content direction={TooltipDirection.Top}>
          Some content
        </Tooltip.Content>
      </ProvidedTooltip>
    );

    fireEvent.mouseEnter(getByTestId('tooltip-container'));

    await waitFor(() => getByTestId('tooltip-content'));

    expect(getByTestId('tooltip-content')).toMatchSnapshot();
  });

  it('renders a tooltip on the right side of the content', async () => {
    const { getByTestId } = render(
      <ProvidedTooltip>
        Hover me
        <Tooltip.Content direction={TooltipDirection.Right}>
          Some content
        </Tooltip.Content>
      </ProvidedTooltip>
    );

    fireEvent.mouseEnter(getByTestId('tooltip-container'));

    await waitFor(() => getByTestId('tooltip-content'));

    expect(getByTestId('tooltip-content')).toMatchSnapshot();
  });

  it('renders a tooltip on the left side of the content', async () => {
    const { getByTestId } = render(
      <ProvidedTooltip>
        Hover me
        <Tooltip.Content direction={TooltipDirection.Left}>
          Some content
        </Tooltip.Content>
      </ProvidedTooltip>
    );

    fireEvent.mouseEnter(getByTestId('tooltip-container'));

    await waitFor(() => getByTestId('tooltip-content'));

    expect(getByTestId('tooltip-content')).toMatchSnapshot();
  });

  it('renders a tooltip on the bottom side of the content', async () => {
    const { getByTestId } = render(
      <ProvidedTooltip>
        Hover me
        <Tooltip.Content direction={TooltipDirection.Bottom}>
          Some content
        </Tooltip.Content>
      </ProvidedTooltip>
    );

    fireEvent.mouseEnter(getByTestId('tooltip-container'));

    await waitFor(() => getByTestId('tooltip-content'));

    expect(getByTestId('tooltip-content')).toMatchSnapshot();
  });
  it('should hide tooltip after the hide delay', async () => {
    jest.useFakeTimers();

    const { getByTestId, queryByTestId } = render(
      <ProvidedTooltip hideDelay={1000}>
        Hover me
        <Tooltip.Content>Some content</Tooltip.Content>
      </ProvidedTooltip>
    );

    fireEvent.mouseEnter(getByTestId('tooltip-container'));

    fireEvent.mouseLeave(getByTestId('tooltip-container'));

    jest.advanceTimersByTime(1000);

    await waitForElementToBeRemoved(() => getByTestId('tooltip-content'));

    expect(queryByTestId('tooltip-content')).not.toBeInTheDocument();
  });
});
