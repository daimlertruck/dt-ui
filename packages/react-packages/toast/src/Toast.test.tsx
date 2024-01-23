import { act, fireEvent, render, screen } from '@testing-library/react';
import { toast } from 'react-hot-toast';

import { emitToast, Toaster } from '..';
import { withProviders } from '../../../dt-ui-react/utils';

import { ToastType } from './constants';
import Toast from './Toast';
import { dismissToast } from './Toaster';

jest.useFakeTimers();

describe('<Toast /> component', () => {
  const TOAST_ID = 'myId';
  const TITLE = 'my title text';
  const MESSAGE = 'my message text';

  const onCloseFn = jest.fn();

  const ProvidedToast = withProviders(Toast);

  it.each`
    type
    ${ToastType.Success}
    ${ToastType.Warning}
    ${ToastType.Info}
    ${ToastType.Error}
  `(
    'should render a toast with title & message when type $type',
    ({ type }) => {
      const { container } = render(
        <ProvidedToast
          id={TOAST_ID}
          message={MESSAGE}
          onClose={onCloseFn}
          title={TITLE}
          type={type}
        />
      );

      expect(container).toMatchSnapshot();
    }
  );

  it.each`
    type
    ${ToastType.Success}
    ${ToastType.Warning}
    ${ToastType.Info}
    ${ToastType.Error}
  `(
    'should render a toast with title & message & action Buttons when type $type',
    ({ type }) => {
      const { container } = render(
        <ProvidedToast
          id={TOAST_ID}
          message={MESSAGE}
          onClose={onCloseFn}
          title={TITLE}
          type={type}
        >
          <button type='button'>Text</button>
          <button type='button'>Text2</button>
        </ProvidedToast>
      );

      const button1 = screen.getByText('Text', { exact: true });
      const button2 = screen.getByText('Text2', { exact: true });
      expect(button1).toBeDefined();
      expect(button2).toBeDefined();
      expect(container).toMatchSnapshot();
    }
  );

  describe('Close button on Toast ', () => {
    it.each`
      type
      ${ToastType.Success}
      ${ToastType.Warning}
      ${ToastType.Info}
      ${ToastType.Error}
    `(
      'with dismissible as true should fire the mock function when type $type',
      ({ type }) => {
        render(
          <ProvidedToast
            dismissible
            id={TOAST_ID}
            message={MESSAGE}
            onClose={onCloseFn}
            title={TITLE}
            type={type}
          />
        );

        const closeBtn = screen.getByRole('button');
        fireEvent.click(closeBtn);

        expect(onCloseFn).toBeCalled();
      }
    );

    it.each`
      type
      ${ToastType.Success}
      ${ToastType.Warning}
      ${ToastType.Info}
      ${ToastType.Error}
    `(
      'with dismissible is false should not be able to find the close button when type $type',
      ({ type }) => {
        render(
          <ProvidedToast
            dismissible={false}
            id={TOAST_ID}
            message={MESSAGE}
            onClose={onCloseFn}
            title={TITLE}
            type={type}
          />
        );

        const closeBtn = screen.queryByRole('button');
        expect(closeBtn).toBeNull();
      }
    );
  });

  it('dismisses the toast with the specified ID when dismissToast function is called', () => {
    const spy = jest.spyOn(toast, 'dismiss');

    dismissToast('testToastId');

    expect(spy).toHaveBeenCalledWith('testToastId');
  });
});

describe('emitToast', () => {
  it.each`
    type
    ${ToastType.Success}
    ${ToastType.Warning}
    ${ToastType.Info}
  `(
    'should emit the toast of type $type and dismiss automatically',
    async ({ type }) => {
      const ProvidedToaster = withProviders(Toaster);

      const mockProps = {
        type,
        title: 'Title',
        message: 'Message',
      };

      render(<ProvidedToaster />);

      act(() => {
        emitToast(mockProps);
      });

      expect(screen.getByText('Title')).toBeInTheDocument();
      expect(screen.getByText('Message')).toBeInTheDocument();

      act(() => {
        jest.runAllTimers();
      });

      expect(screen.queryByText('Title')).not.toBeInTheDocument();
    }
  );

  test('should emit the toast of type error and only dismiss when clicking close button', () => {
    const ProvidedToaster = withProviders(Toaster);

    const mockProps = {
      type: ToastType.Error,
      title: 'Title',
      message: 'Message',
    };

    render(<ProvidedToaster />);

    act(() => {
      emitToast(mockProps);
    });

    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Message')).toBeInTheDocument();

    act(() => {
      jest.runAllTimers();
    });

    expect(screen.queryByText('Title')).toBeInTheDocument();

    const closeButton = screen.getByRole('button');
    fireEvent.click(closeButton);

    act(() => {
      jest.runAllTimers();
    });

    expect(screen.queryByText('Title')).not.toBeInTheDocument();
  });
});
