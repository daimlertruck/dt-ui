import { withProviders } from '@dt-ui/react-core';
import { render } from '@testing-library/react';
import React from 'react';

import { Checkbox } from '.';

describe('<CheckBox /> component', () => {
  const ProvidedCheckBox = withProviders(Checkbox);

  it('renders checkbox with label', () => {
    const { container } = render(
      <ProvidedCheckBox
        isChecked={false}
        isDisabled={false}
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
        isChecked={false}
        isDisabled={false}
        onChange={() => null}
      />
    );
    expect(container).toMatchSnapshot();
  });

  it('renders checkbox checked', () => {
    const { container } = render(
      <ProvidedCheckBox isChecked isDisabled={false} onChange={() => null} />
    );
    expect(container).toMatchSnapshot();
  });

  it('renders checkbox disabled', () => {
    const { container } = render(
      <ProvidedCheckBox isChecked={false} isDisabled onChange={() => null} />
    );
    expect(container).toMatchSnapshot();
  });
});
