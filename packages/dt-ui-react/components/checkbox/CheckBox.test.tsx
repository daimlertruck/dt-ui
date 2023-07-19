import { render } from '@testing-library/react';
import React from 'react';

import { withProviders } from '../../utils';

import { Checkbox } from '.';

describe('<CheckBox /> component', () => {
  const ProvidedCheckBox = withProviders(Checkbox);

  it('renders checkbox with label', () => {
    const { container } = render(
      <ProvidedCheckBox
        isDisabled={false}
        isChecked={false}
        onChange={() => null}
      >
        Label
      </ProvidedCheckBox>
    );
    expect(container).toMatchSnapshot();
  });

  it('renders checkbox without label', () => {
    const { container } = render(
      <ProvidedCheckBox
        isDisabled={false}
        isChecked={false}
        onChange={() => null}
      />
    );
    expect(container).toMatchSnapshot();
  });

  it('renders checkbox checked', () => {
    const { container } = render(
      <ProvidedCheckBox
        isDisabled={false}
        isChecked={true}
        onChange={() => null}
      />
    );
    expect(container).toMatchSnapshot();
  });

  it('renders checkbox disabled', () => {
    const { container } = render(
      <ProvidedCheckBox
        isDisabled={true}
        isChecked={false}
        onChange={() => null}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
