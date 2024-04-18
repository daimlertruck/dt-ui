import {
  RefObject,
  Dispatch,
  SetStateAction,
  ReactNode,
  ReactElement,
  cloneElement,
  Children,
} from 'react';

import {
  getColumnsWidths,
  getFixedColumnPosition,
  getFixedEndColumnPosition,
  mapValidChildren,
  observeShouldColumnsBeFixed,
} from './fixedColumns';

describe('observeShouldColumnsBeFixed', () => {
  const tableRef: RefObject<HTMLTableElement | null> = {
    current: document.createElement('table'),
  };
  const setIsColumnsFixed: jest.Mock<Dispatch<SetStateAction<boolean>>> =
    jest.fn();
  const intersectionObserverReturnValue = {
    observe: jest.fn(),
    disconnect: jest.fn(),
  };
  let intersectionObserverSpy: jest.SpyInstance;

  const setScrollHidden = (isScrollHidden: boolean) => {
    intersectionObserverSpy.mockImplementationOnce((callback) => {
      callback([{ isIntersecting: isScrollHidden }]);
      return intersectionObserverReturnValue;
    });
  };

  beforeEach(() => {
    intersectionObserverSpy = jest.spyOn(window, 'IntersectionObserver');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create an observer and observe the table if it exists', () => {
    setScrollHidden(false);
    const observer = observeShouldColumnsBeFixed(
      tableRef,
      0,
      0,
      setIsColumnsFixed
    );
    expect(intersectionObserverSpy).toHaveBeenCalledTimes(1);
    expect(intersectionObserverReturnValue.observe).toHaveBeenCalledWith(
      tableRef.current
    );

    observer.disconnect();
    expect(intersectionObserverReturnValue.disconnect).toHaveBeenCalledTimes(1);
  });

  it.each`
    fixedColumnCount | fixedEndColumnCount | isScrollHidden | expectColumnsToBeFixed
    ${0}             | ${0}                | ${true}        | ${false}
    ${1}             | ${0}                | ${true}        | ${false}
    ${1}             | ${1}                | ${true}        | ${false}
    ${0}             | ${0}                | ${false}       | ${false}
    ${1}             | ${0}                | ${false}       | ${true}
    ${1}             | ${1}                | ${false}       | ${true}
  `(
    'should set columns as fixed based on given counts and scroll visibility',
    ({
      fixedColumnCount,
      fixedEndColumnCount,
      isScrollHidden,
      expectColumnsToBeFixed,
    }) => {
      setScrollHidden(isScrollHidden);
      observeShouldColumnsBeFixed(
        tableRef,
        fixedColumnCount,
        fixedEndColumnCount,
        setIsColumnsFixed
      );
      expect(setIsColumnsFixed).toHaveBeenCalledWith(expectColumnsToBeFixed);
    }
  );

  it('should not observe if table does not exist', () => {
    setScrollHidden(false);
    observeShouldColumnsBeFixed({ current: null }, 1, 0, setIsColumnsFixed);
    expect(intersectionObserverReturnValue.observe).not.toHaveBeenCalled();
  });
});

describe('mapValidChildren', () => {
  it('should return undefined if children is not provided', () => {
    const result = mapValidChildren(undefined, () => null);
    expect(result).toBeUndefined();
  });

  it('should return only valid children if no valid elements are present', () => {
    const children: ReactNode = ['text', 123, null];
    const result = mapValidChildren(children, (child) => child);
    expect(result).toEqual(['text', 123]);
  });

  it('should map valid elements using the provided callback', () => {
    const children: ReactNode = [
      <div key='1'>Child 1</div>,
      <span key='2'>Child 2</span>,
    ];
    const expectedResult = [
      <div key='1'>Mapped Child 1 on index: 0</div>,
      <span key='2'>Mapped Child 2 on index: 1</span>,
    ];
    const result = mapValidChildren(
      children,
      (child: ReactElement, index: number) => {
        return cloneElement(child, {
          children: `Mapped ${child.props.children} on index: ${index}`,
        });
      }
    );
    expect(result).toEqual(Children.toArray(expectedResult));
  });
});

describe('getColumnsWidths', () => {
  it('should return an array of column widths', () => {
    const rowRefMock = {
      children: [
        { clientWidth: 100 },
        { clientWidth: 150 },
        { clientWidth: 120 },
      ],
    };

    const result = getColumnsWidths(rowRefMock as never as HTMLTableRowElement);

    expect(result).toEqual([100, 150, 120]);
  });

  it('should return an empty array if rowRef has no children', () => {
    const rowRefMock = {
      children: [],
    };

    const result = getColumnsWidths(rowRefMock as never as HTMLTableRowElement);

    expect(result).toEqual([]);
  });
});

describe('getFixedColumnPosition', () => {
  it('should return the correct position for the fixed column', () => {
    const columnsWidths = [100, 50, 100, 30, 10];

    let result = getFixedColumnPosition(0, columnsWidths);
    expect(result).toEqual(0);

    result = getFixedColumnPosition(1, columnsWidths);
    expect(result).toEqual(100);

    result = getFixedColumnPosition(2, columnsWidths);
    expect(result).toEqual(150);
  });

  it('should return 0 if columnsWidths is empty', () => {
    const columnsWidths: number[] = [];

    const result = getFixedColumnPosition(0, columnsWidths);
    expect(result).toEqual(0);
  });
});

describe('getFixedEndColumnPosition', () => {
  it('should return the correct position for the fixed end column', () => {
    const columnsWidths = [100, 50, 100, 30, 10];

    let result = getFixedEndColumnPosition(2, columnsWidths);
    expect(result).toEqual(40);

    result = getFixedEndColumnPosition(3, columnsWidths);
    expect(result).toEqual(10);

    result = getFixedEndColumnPosition(4, columnsWidths);
    expect(result).toEqual(0);
  });

  it('should return 0 if columnsWidths is empty', () => {
    const columnsWidths: number[] = [];

    const result = getFixedEndColumnPosition(0, columnsWidths);
    expect(result).toEqual(0);
  });
});
