import { withTooltipProvider } from '@dt-ui/react-tooltip';
import { renderHook } from '@testing-library/react';
import React from 'react';

import { Table } from '../components/table';
import { BaseProps } from '../types';
import { withProviders } from '../utils';

import useDebounceResize from './useDebounceResize';
import { useIsOverflow } from './useIsOverflow';
import useMedia from './useMedia';

jest.mock('./useDebounceResize.ts');
jest.mock('./useMedia.ts');

const mockUseDebounceResize = useDebounceResize as jest.Mock<() => void>;
const mockUseMedia = useMedia as jest.Mock<boolean>;

describe('useIsOverflow', () => {
  beforeEach(() => {
    mockUseDebounceResize.mockImplementation((callback) => callback());
    jest
      .spyOn(React, 'useRef')
      .mockReturnValue({ current: { clientWidth: 1, scrollWidth: 0 } });
  });

  it('should not modify children if not on desktop', () => {
    mockUseMedia.mockReturnValue(false);
    const { result } = renderUseCollapsedBreadcrumb();

    expect(result.current.overflow).toBe(false);
  });

  it('on Desktop and scroll width is larger than the container', () => {
    mockUseMedia.mockReturnValue(true);
    jest
      .spyOn(React, 'useRef')
      .mockReturnValue({ current: { clientWidth: 0, scrollWidth: 1 } });

    const { result } = renderUseCollapsedBreadcrumb();

    expect(result.current.overflow).toBe(true);
  });
});

const ProvidedTable = withProviders(withTooltipProvider(Table));

const wrapper = ({ children }: BaseProps) => (
  <ProvidedTable>{children}</ProvidedTable>
);

const renderUseCollapsedBreadcrumb = () => {
  const result = renderHook(() => useIsOverflow(), {
    wrapper,
  });

  return result;
};
