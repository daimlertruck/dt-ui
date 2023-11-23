import { fireEvent, render, screen } from '@testing-library/react';
import { toast } from 'react-hot-toast';

import { withProviders } from '../../utils';
import { Button } from '../buttons';

import { ToastType } from './constants';
import Toast from './Toast';
import { dismissToast } from './Toaster';

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
          <Button
            color='primary'
            onClick={() => console.log('clicked')}
            variant='text'
          >
            Text
          </Button>
          <Button
            color='primary'
            onClick={() => console.log('clicked')}
            variant='text'
          >
            Text2
          </Button>
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
    toast.dismiss = jest.fn();

    dismissToast('testToastId');

    expect(toast.dismiss).toHaveBeenCalledWith('testToastId');
  });
});
