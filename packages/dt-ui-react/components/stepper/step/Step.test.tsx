import { render } from '@testing-library/react';
import React from 'react';

import { withProviders } from '../../../utils';

import Step from './Step';

describe('<Step /> component', () => {
  const ProvidedStep = withProviders(Step);

  describe('render', () => {
    it('default step', () => {
      const { container } = render(
        <ProvidedStep>
          <Step.Counter>1</Step.Counter>
          <Step.Label>Label</Step.Label>
        </ProvidedStep>
      );

      expect(container).toMatchSnapshot();
    });

    it('active step', () => {
      const { container } = render(
        <ProvidedStep isActive>
          <Step.Counter>1</Step.Counter>
          <Step.Label>Label</Step.Label>
        </ProvidedStep>
      );

      expect(container).toMatchSnapshot();
    });

    it('disabled step', () => {
      const { container } = render(
        <ProvidedStep isDisabled>
          <Step.Counter>1</Step.Counter>
          <Step.Label>Label</Step.Label>
        </ProvidedStep>
      );

      expect(container).toMatchSnapshot();
    });

    it('error step', () => {
      const { container } = render(
        <ProvidedStep isError>
          <Step.Counter>1</Step.Counter>
          <Step.Label>Label</Step.Label>
        </ProvidedStep>
      );

      expect(container).toMatchSnapshot();
    });
  });

  describe('<Step.Counter /> component', () => {
    const ProvidedStepCounter = withProviders(Step.Counter);
    it('should render default behaviour', () => {
      const { container } = render(
        <ProvidedStepCounter>1</ProvidedStepCounter>
      );

      expect(container).toMatchSnapshot();
    });

    it('should render active behaviour', () => {
      const { container } = render(
        <ProvidedStepCounter isActive>1</ProvidedStepCounter>
      );

      expect(container).toMatchSnapshot();
    });

    it('should render completed behaviour', () => {
      const { container } = render(
        <ProvidedStepCounter isCompleted>1</ProvidedStepCounter>
      );

      expect(container).toMatchSnapshot();
    });
  });

  describe('<Step.Label /> component', () => {
    const ProvidedStepLabel = withProviders(Step.Label);
    it('should render default behaviour', () => {
      const { container } = render(
        <ProvidedStepLabel>Label</ProvidedStepLabel>
      );

      expect(container).toMatchSnapshot();
    });

    it('should render active behaviour', () => {
      const { container } = render(
        <ProvidedStepLabel isActive>Label</ProvidedStepLabel>
      );

      expect(container).toMatchSnapshot();
    });

    it('should render completed behaviour', () => {
      const { container } = render(
        <ProvidedStepLabel isCompleted>1</ProvidedStepLabel>
      );

      expect(container).toMatchSnapshot();
    });
  });
});
