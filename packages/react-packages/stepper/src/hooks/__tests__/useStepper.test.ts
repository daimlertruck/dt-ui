import { renderHook, act } from '@testing-library/react';

import { useStepper } from '../useStepper';

describe('useStepper', () => {
  test('should increment and decrement the step', () => {
    const { result } = renderHook(() => useStepper());

    act(() => result.current.handleNext());
    expect(result.current.activeStep).toBe(1);

    act(() => result.current.handleBack());
    expect(result.current.activeStep).toBe(0);
  });
});
