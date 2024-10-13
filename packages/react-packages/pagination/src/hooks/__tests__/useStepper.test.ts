import { renderHook, act } from '@testing-library/react';

import { usePagination } from '../usePagination';

describe('usePagination hook', () => {
  test('should initialize with currentPage set to 1', () => {
    const { result } = renderHook(() => usePagination());
    expect(result.current.currentPage).toBe(1);
  });

  test('should update currentPage when handleChange is called', () => {
    const { result } = renderHook(() => usePagination());

    act(() => {
      result.current.handleChange(3);
    });

    expect(result.current.currentPage).toBe(3);
  });

  test('should prevent invalid key input in handleUserInput', () => {
    const { result } = renderHook(() => usePagination());

    const invalidKeyboardEvent = {
      code: 'KeyA',
      preventDefault: jest.fn(),
    } as unknown as React.KeyboardEvent<HTMLInputElement>;

    act(() => {
      result.current.handleUserInput(invalidKeyboardEvent);
    });

    expect(invalidKeyboardEvent.preventDefault).toHaveBeenCalled();
  });

  test('should allow valid key input in handleUserInput', () => {
    const { result } = renderHook(() => usePagination());

    const validKeyboardEvent = {
      code: 'Enter',
      preventDefault: jest.fn(),
    } as unknown as React.KeyboardEvent<HTMLInputElement>;

    act(() => {
      result.current.handleUserInput(validKeyboardEvent);
    });

    expect(validKeyboardEvent.preventDefault).not.toHaveBeenCalled();
  });
});
