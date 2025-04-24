import { renderHook, act } from '@testing-library/react';

import useModal from './useModal';

describe('useModal Hook', () => {
  it('should initialize with the provided initialState (false by default)', () => {
    const { result } = renderHook(() => useModal());
    expect(result.current.isModalOpen).toBe(false);

    const { result: resultTrue } = renderHook(() => useModal(true));
    expect(resultTrue.current.isModalOpen).toBe(true);
  });

  it('should toggle the modal state correctly', () => {
    const { result } = renderHook(() => useModal());
    expect(result.current.isModalOpen).toBe(false);

    act(() => {
      result.current.toggleModal();
    });
    expect(result.current.isModalOpen).toBe(true);

    act(() => {
      result.current.toggleModal();
    });
    expect(result.current.isModalOpen).toBe(false);
  });

  it('should update the modal state when initialState changes', () => {
    const { result, rerender } = renderHook(
      (initialProps: boolean) => useModal(initialProps),
      {
        initialProps: false,
      }
    );
    expect(result.current.isModalOpen).toBe(false);

    rerender(true);
    expect(result.current.isModalOpen).toBe(true);

    rerender(false);
    expect(result.current.isModalOpen).toBe(false);
  });
});
