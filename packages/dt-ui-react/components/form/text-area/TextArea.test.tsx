import { render } from '@testing-library/react';
import React from 'react';

import { withProviders } from '../../../utils';

import { TextArea } from '.';

describe('<TextArea /> component', () => {
  const ProvidedTextArea = withProviders(TextArea);

  it('it should a textarea', () => {
    const { container } = render(
      <ProvidedTextArea label='My text area' maxLength={200} />
    );

    expect(container).toMatchSnapshot();
  });
});
