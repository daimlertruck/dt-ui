import { render } from '@testing-library/react';
import React from 'react';

import { withProviders } from '../../../utils';

import { Toggle } from './Toggle';

describe('<Toggle /> component', () => {
  const ProvidedToggle = withProviders(Toggle);
  const LABEL = 'Toggle';

  describe('when the toggle is disabled and is checked', () => {
    it('should render a toggle with grey 400 bg color and light grey label color', () => {
      const { container } = render(
        <ProvidedToggle
          isDisabled={true}
          isChecked={true}
          onChange={() => null}
        >
          <Toggle.Label>{LABEL}</Toggle.Label>
        </ProvidedToggle>
      );

      expect(container).toMatchSnapshot();
    });
  });

  describe("when the toggle is disabled and isn't checked", () => {
    it('should render a toggle with 300 grey bg color and light grey label color', () => {
      const { container } = render(
        <ProvidedToggle
          isDisabled={true}
          isChecked={false}
          onChange={() => null}
        >
          <Toggle.Label>{LABEL}</Toggle.Label>
        </ProvidedToggle>
      );

      expect(container).toMatchSnapshot();
    });
  });

  describe("when the toggle isn't disabled and is checked with default state", () => {
    it('should render a toggle with green color and a label', () => {
      const { container } = render(
        <ProvidedToggle
          isDisabled={false}
          isChecked={true}
          onChange={() => null}
        >
          {LABEL}
        </ProvidedToggle>
      );

      expect(container).toMatchSnapshot();
    });
  });

  describe("when the toggle isn't disabled and isn't checked", () => {
    it('should render a toggle with 400 gray and a label', () => {
      const { container } = render(
        <ProvidedToggle
          isDisabled={false}
          isChecked={false}
          onChange={() => null}
        >
          {LABEL}
        </ProvidedToggle>
      );

      expect(container).toMatchSnapshot();
    });
  });
});
