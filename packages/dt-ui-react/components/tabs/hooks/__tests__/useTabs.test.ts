import { act, renderHook } from '@testing-library/react';

import { useTabs } from '../useTabs';

describe('useTabs hook', () => {
  it('should change active tab', () => {
    const initialTab = 'first';
    const hook = renderHook(() => useTabs(initialTab));

    act(() => hook.result.current.handleChange('second'));

    expect(hook.result.current.activeTab).toEqual('second');
  });
});
