import { render } from '@testing-library/react';
import React from 'react';

import { withProviders } from '../../utils';

import Stepper from './Stepper';

describe('<Stepper /> component', () => {
  const ProvidedStepper = withProviders(Stepper);

  describe('when the orientation is', () => {
    describe('vertical', () => {
      it('should render using flex direction column', () => {
        const { container } = render(
          <ProvidedStepper>
            <li>Item 1</li>
            <li>Item 2</li>
          </ProvidedStepper>
        );

        expect(container).toMatchSnapshot();
      });
    });

    describe('horizontal', () => {
      it('should render using flex direction row', () => {
        const { container } = render(
          <ProvidedStepper orientation='horizontal'>
            <li>Item 1</li>
            <li>Item 2</li>
          </ProvidedStepper>
        );

        expect(container).toMatchSnapshot();
      });
    });
  });
});
