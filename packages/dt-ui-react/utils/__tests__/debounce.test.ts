import debounce from '../debounce';

describe('debounce', () => {
  jest.useFakeTimers();

  it('should not execute callback until right time has passed', () => {
    const callback = jest.fn();
    const delayedFunction = debounce(callback, 200);

    delayedFunction();
    expect(callback).not.toBeCalled();

    jest.advanceTimersByTime(199);
    expect(callback).not.toBeCalled();
  });

  it('should execute callback after right time has passed', () => {
    const callback = jest.fn();
    const delayedFunction = debounce(callback, 200);

    delayedFunction();
    expect(callback).not.toBeCalled();

    jest.advanceTimersByTime(200);
    expect(callback).toBeCalled();
  });
});
