import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { withProviders } from '../../utils';

import { ToastType } from './constants';
import Toast from './Toast';

describe('<Toast /> component', () => {
  const TOAST_ID = 'myId';
  const TITLE = 'my title text';
  const MESSAGE = 'my message text';

  const onCloseFn = jest.fn();

  const ProvidedToast = withProviders(Toast);

  describe('when the toast type is success', () => {
    it('should render a toast with title & message', () => {
      const { container } = render(
        <ProvidedToast
          id={TOAST_ID}
          type={ToastType.Success}
          title={TITLE}
          message={MESSAGE}
          onClose={onCloseFn}
        />
      );

      expect(container).toMatchSnapshot();
    });

    it('should render a toast with title, message & children', () => {
      const { container } = render(
        <ProvidedToast
          id={TOAST_ID}
          type={ToastType.Success}
          title={TITLE}
          message={MESSAGE}
          onClose={onCloseFn}
        >
          Some children
        </ProvidedToast>
      );

      expect(container).toMatchSnapshot();
    });
  });

  describe('when the close button is clicked', () => {
    it('should fire the mock function', () => {
      render(
        <ProvidedToast
          id={TOAST_ID}
          type={ToastType.Success}
          title={TITLE}
          message={MESSAGE}
          onClose={onCloseFn}
        />
      );

      const closeBtn = screen.getByRole('button');
      fireEvent.click(closeBtn);

      expect(onCloseFn).toBeCalledTimes(1);
    });
  });
});
