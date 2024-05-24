import { render } from '@dt-ui/react-core';

import Step, { BaseStepProps } from './Step';

describe('<Step /> component', () => {
  describe('render Step', () => {
    it.each`
      isActive | isCompleted | isDisabled | isError
      ${true}  | ${false}    | ${false}   | ${false}
      ${false} | ${true}     | ${false}   | ${false}
      ${false} | ${false}    | ${true}    | ${false}
      ${false} | ${false}    | ${false}   | ${true}
      ${true}  | ${false}    | ${false}   | ${true}
    `(
      'renders Step with props correctly',
      ({ isActive, isCompleted, isDisabled, isError }: BaseStepProps) => {
        const { container } = render(
          <Step
            isActive={isActive}
            isCompleted={isCompleted}
            isDisabled={isDisabled}
            isError={isError}
          >
            <Step.Counter>1</Step.Counter>
            <Step.Label>Label</Step.Label>
          </Step>
        );

        expect(container).toMatchSnapshot();
      }
    );
  });

  describe('<Step.Counter /> component', () => {
    it.each`
      isActive | isCompleted | isDisabled | isError
      ${true}  | ${false}    | ${false}   | ${false}
      ${false} | ${true}     | ${false}   | ${false}
      ${false} | ${false}    | ${true}    | ${false}
      ${false} | ${false}    | ${false}   | ${true}
      ${true}  | ${false}    | ${false}   | ${true}
    `(
      'renders StepCounter with props correctly',
      ({ isActive, isCompleted, isDisabled, isError }: BaseStepProps) => {
        const { container } = render(
          <Step.Counter
            isActive={isActive}
            isCompleted={isCompleted}
            isDisabled={isDisabled}
            isError={isError}
          >
            1
          </Step.Counter>
        );

        expect(container).toMatchSnapshot();
      }
    );
  });

  describe('<Step.Label /> component', () => {
    it.each`
      isActive | isCompleted | isDisabled | isError
      ${true}  | ${false}    | ${false}   | ${false}
      ${false} | ${true}     | ${false}   | ${false}
      ${false} | ${false}    | ${true}    | ${false}
      ${false} | ${false}    | ${false}   | ${true}
      ${true}  | ${false}    | ${false}   | ${true}
    `(
      'renders StepCounter with props correctly',
      ({ isActive, isCompleted, isDisabled, isError }: BaseStepProps) => {
        const { container } = render(
          <Step.Label
            isActive={isActive}
            isCompleted={isCompleted}
            isDisabled={isDisabled}
            isError={isError}
          >
            Label
          </Step.Label>
        );

        expect(container).toMatchSnapshot();
      }
    );
  });
});
