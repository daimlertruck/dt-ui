import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';

import { withProviders } from '../../utils';

import { Drawer } from '.';

describe('<Drawer /> component', () => {
  const ProvidedDrawer = withProviders(Drawer);

  it('renders correctly with children', () => {
    const { container } = render(
      <ProvidedDrawer isVisible setIsVisible={jest.fn()}>
        <div>Example content</div>
      </ProvidedDrawer>
    );

    expect(container).toMatchSnapshot();
  });

  it('closes when clicking the overlay', () => {
    const setIsVisibleMock = jest.fn();

    render(
      <ProvidedDrawer isVisible setIsVisible={setIsVisibleMock}>
        <div>Example content</div>
      </ProvidedDrawer>
    );

    const overlay = screen.getByTestId('drawer-overlay');
    fireEvent.click(overlay);

    expect(setIsVisibleMock).toHaveBeenCalledWith(false);
  });

  it('closes when clicking the close button', () => {
    const setIsVisibleMock = jest.fn();

    render(
      <ProvidedDrawer isVisible setIsVisible={setIsVisibleMock}>
        <div>Example content</div>
      </ProvidedDrawer>
    );

    const closeButton = screen.getByTestId('drawer-close-button');
    fireEvent.click(closeButton);

    expect(setIsVisibleMock).toHaveBeenCalledWith(false);
  });

  it('applies correct styles when visible', () => {
    render(
      <ProvidedDrawer isVisible setIsVisible={jest.fn()}>
        <div>Example content</div>
      </ProvidedDrawer>
    );

    const container = screen.getByTestId('drawer-container');
    expect(container).toHaveStyle('transform: translateX(0);');

    const overlay = screen.getByTestId('drawer-overlay');
    expect(overlay).toHaveStyle('opacity: 0.2;');
  });

  it('applies correct styles when not visible', async () => {
    render(
      <ProvidedDrawer isVisible={false} setIsVisible={jest.fn()}>
        <div>Example content</div>
      </ProvidedDrawer>
    );

    const container = screen.getByTestId('drawer-container');
    expect(container).toHaveStyle('transform: translateX(100%);');

    const overlay = screen.getByTestId('drawer-overlay');
    await waitFor(() => expect(overlay).toHaveStyle('opacity: 0;'));
  });

  it('displays with DrawerHeader, ScrollEffectContainer and DrawerBody with expected prop values', () => {
    render(
      <ProvidedDrawer isVisible setIsVisible={jest.fn()}>
        <Drawer.Header>
          <Drawer.Title title='Drawer Title' />
          <div>Header Content</div>
        </Drawer.Header>
        <Drawer.ScrollEffectContainer />
        <Drawer.Body>Body Content</Drawer.Body>
      </ProvidedDrawer>
    );

    const titleElement = screen.getByText('Drawer Title');
    expect(titleElement).toBeInTheDocument();

    const customHeaderContent = screen.getByText('Header Content');
    expect(customHeaderContent).toBeInTheDocument();

    const customBodyContent = screen.getByText('Body Content');
    expect(customBodyContent).toBeInTheDocument();
  });
});
