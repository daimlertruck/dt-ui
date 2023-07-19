import { render, fireEvent, screen } from '@testing-library/react';
import React from 'react';

import { withProviders } from '../../utils';

import { Radio, RadioGroup } from '.';

describe('<Radio /> component', () => {
  const ProvidedRadioGroup = withProviders(RadioGroup);
  it('renders Radio group with Radio 1 checked and Radio 3 disabled', () => {
    const { container } = render(
      <ProvidedRadioGroup onChange={() => null} name='radio-group-name'>
        <Radio
          value='1'
          isDisabled={false}
          label='Label 1'
          isDefaultChecked={true}
        />
        <Radio value='2' isDisabled={false} label='Label 2' />
        <Radio value='3' isDisabled={true} label='Label 3' />
      </ProvidedRadioGroup>
    );
    expect(container).toMatchSnapshot();
  });

  it('changes selected Radio', () => {
    render(
      <ProvidedRadioGroup onChange={() => null} name='radio-group-name'>
        <Radio value='1' label='Label 1' />
        <Radio value='2' label='Label 2' isDefaultChecked={true} />
      </ProvidedRadioGroup>
    );

    fireEvent.click(screen.getByText('Label 1'));
    expect(screen.getByLabelText('Label 1')).toBeChecked();
  });
});
