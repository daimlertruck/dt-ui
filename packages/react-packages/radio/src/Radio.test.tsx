import { render } from '@dt-ui/react-core';
import { fireEvent, screen } from '@testing-library/react';

import { Radio, RadioGroup } from '.';

describe('<Radio /> component', () => {
  it('renders Radio group with Radio 1 checked and Radio 3 disabled', () => {
    const { container } = render(
      <RadioGroup name='radio-group-name' onChange={() => null}>
        <Radio isDefaultChecked isDisabled={false} label='Label 1' value='1' />
        <Radio isDisabled={false} label='Label 2' value='2' />
        <Radio isDisabled label='Label 3' value='3' />
      </RadioGroup>
    );
    expect(container).toMatchSnapshot();
  });

  it('changes selected Radio', () => {
    render(
      <RadioGroup name='radio-group-name' onChange={() => null}>
        <Radio label='Label 1' value='1' />
        <Radio isDefaultChecked label='Label 2' value='2' />
      </RadioGroup>
    );

    fireEvent.click(screen.getByText('Label 1'));
    expect(screen.getByLabelText('Label 1')).toBeChecked();
  });
});
