import { withProviders } from '@dt-ui/react-core';
import { render, fireEvent, screen } from '@testing-library/react';
import React from 'react';

import { Radio, RadioGroup } from '.';

describe('<Radio /> component', () => {
  const ProvidedRadioGroup = withProviders(RadioGroup);
  it('renders Radio group with Radio 1 checked and Radio 3 disabled', () => {
    const { container } = render(
      <ProvidedRadioGroup name='radio-group-name' onChange={() => null}>
        <Radio isDefaultChecked isDisabled={false} label='Label 1' value='1' />
        <Radio isDisabled={false} label='Label 2' value='2' />
        <Radio isDisabled label='Label 3' value='3' />
      </ProvidedRadioGroup>
    );
    expect(container).toMatchSnapshot();
  });

  it('changes selected Radio', () => {
    render(
      <ProvidedRadioGroup name='radio-group-name' onChange={() => null}>
        <Radio label='Label 1' value='1' />
        <Radio isDefaultChecked label='Label 2' value='2' />
      </ProvidedRadioGroup>
    );

    fireEvent.click(screen.getByText('Label 1'));
    expect(screen.getByLabelText('Label 1')).toBeChecked();
  });
});
