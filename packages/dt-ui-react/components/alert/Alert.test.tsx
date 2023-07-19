import { render } from '@testing-library/react';
import React from 'react';

import { withProviders } from '../../utils';

import Alert from './Alert';
import { AlertType } from './constants';

describe('<Alert /> component', () => {
  const ProvidedAlert = withProviders(Alert);

  describe('when the alert type is warning', () => {
    it('should render a alert with some text and the right color and icon', () => {
      const { container } = render(
        <ProvidedAlert type={AlertType.Warning}>
          some warning message here
        </ProvidedAlert>
      );

      expect(container).toMatchSnapshot();
    });
  });

  describe('when the alert type is error', () => {
    it('should render a alert with some text and the right color and icon', () => {
      const { container } = render(
        <ProvidedAlert type={AlertType.Error}>
          some error message here
        </ProvidedAlert>
      );

      expect(container).toMatchSnapshot();
    });
  });

  describe('when the alert type is info', () => {
    it('should render a alert with some text and the right color and icon', () => {
      const { container } = render(
        <ProvidedAlert type={AlertType.Info}>
          some info message here
        </ProvidedAlert>
      );

      expect(container).toMatchSnapshot();
    });
  });
});
