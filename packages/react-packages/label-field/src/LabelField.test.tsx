import { withProviders } from '@dt-ui/react-core';
import { render } from '@testing-library/react';
import React from 'react';

import { LabelField } from './LabelField';

describe('<LabelField /> component', () => {
  const ProvidedLabelField = withProviders(LabelField);
  const INPUT_ID = 'input-id';

  describe('when the LabelField is active', () => {
    it('it should render a small font-size and -45º translation', () => {
      const { container } = render(
        <>
          <ProvidedLabelField forId={INPUT_ID} isActive>
            My Awesome Input
          </ProvidedLabelField>
          <input id={INPUT_ID} />
        </>
      );

      expect(container).toMatchSnapshot();
    });
  });

  describe('when the LabelField is inactive', () => {
    it('it should render a bigger font-size and 0 translation', () => {
      const { container } = render(
        <>
          <ProvidedLabelField forId={INPUT_ID} isActive={false}>
            My Awesome Input
          </ProvidedLabelField>
          <input id={INPUT_ID} />
        </>
      );

      expect(container).toMatchSnapshot();
    });
  });

  it('it renders a disabled label field', () => {
    const { container } = render(
      <>
        <ProvidedLabelField forId={INPUT_ID} isDisabled>
          My Awesome Input
        </ProvidedLabelField>
        <input id={INPUT_ID} />
      </>
    );

    expect(container).toMatchSnapshot();
  });

  it('it renders a label field as error', () => {
    const { getByTestId } = render(
      <>
        <ProvidedLabelField forId={INPUT_ID} hasError>
          My Awesome Input
        </ProvidedLabelField>
        <input id={INPUT_ID} />
      </>
    );

    const LabelField = getByTestId('label-field');

    expect(LabelField).toHaveStyle('color: rgb(255, 73, 74)');
  });

  it('it renders a label field as required', () => {
    const { container } = render(
      <>
        <ProvidedLabelField forId={INPUT_ID} isRequired>
          My Awesome Input
        </ProvidedLabelField>
        <input id={INPUT_ID} />
      </>
    );
    expect(container).toMatchSnapshot();
  });
});
