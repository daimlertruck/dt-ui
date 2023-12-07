import { renderHook, act } from '@testing-library/react';

import useDebounceResize from './useDebounceResize';

jest.useFakeTimers();

describe('useDebounceResize', () => {
  let resizeEventListeners: Record<string, EventListener> = {};

  beforeEach(() => {
    resizeEventListeners = {};
    window.addEventListener = jest.fn((event, callback) => {
      resizeEventListeners[event] = callback as EventListener;
    });
    window.removeEventListener = jest.fn((event) => {
      delete resizeEventListeners[event];
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should add and remove event listener on mount and unmount', () => {
    const { unmount } = renderHook(() => useDebounceResize(jest.fn(), 200));

    expect(window.addEventListener).toHaveBeenCalledWith(
      'resize',
      expect.any(Function)
    );

    unmount();

    expect(window.removeEventListener).toHaveBeenCalledWith(
      'resize',
      expect.any(Function)
    );
  });

  it('should debounce the callback on window resize', async () => {
    const callback = jest.fn();
    renderHook(() => useDebounceResize(callback, 200));

    act(() => {
      resizeEventListeners.resize(new Event('resize'));
      resizeEventListeners.resize(new Event('resize'));
      resizeEventListeners.resize(new Event('resize'));
      jest.advanceTimersByTime(201);
    });

    expect(callback).toHaveBeenCalledTimes(1);
  });
});
