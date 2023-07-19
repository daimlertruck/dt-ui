import { render } from '@testing-library/react';
import React from 'react';

import { withProviders } from '../../../utils';

import { LabelField } from './';

describe('<LabelField /> component', () => {
  const ProvidedLabelField = withProviders(LabelField);
  const INPUT_ID = 'input-id';

  describe('when the LabelField is active', () => {
    it('it should render a small font-size and -45º translation', () => {
      const { container } = render(
        <>
          <ProvidedLabelField forId={INPUT_ID} isActive={true}>
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
        <ProvidedLabelField forId={INPUT_ID} isDisabled={true}>
          My Awesome Input
        </ProvidedLabelField>
        <input id={INPUT_ID} />
      </>
    );

    expect(container).toMatchSnapshot();
  });
});
