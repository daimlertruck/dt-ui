import { render, fireEvent, screen } from '@testing-library/react';
import React from 'react';

import { withProviders } from '../../../utils';

import { DatePicker } from './DatePicker';

const BORDER_BOTTOM_ERROR_STYLE = 'border-bottom: 2px solid #D21C1C';
const INPUT_LABEL = 'Choose a date';
const INPUT_LABEL_REQUIRED = `${INPUT_LABEL} *`;

describe('<DatePicker /> component', () => {
  const ProvidedDatePicker = withProviders(DatePicker);

  it('should render date input correctly', () => {
    const { container } = render(
      <ProvidedDatePicker
        value=''
        required
        label='Choose a date'
        min='2023-03-30'
        max='2025-03-30'
        onChange={jest.fn()}
      />
    );

    expect(container).toMatchSnapshot();
  });

  it('should call onChange when changing date input value', () => {
    const onChange = jest.fn();
    render(
      <ProvidedDatePicker
        value=''
        label='Choose a date'
        min='2023-03-30'
        max='2025-03-30'
        onChange={onChange}
      />
    );

    const input = screen.getByLabelText(INPUT_LABEL);
    fireEvent.change(input, { target: { value: '2023-05-05' } });

    expect(onChange).toHaveBeenCalledTimes(1);
  });

  describe('onFocus event', () => {
    it('should call showPicker', () => {
      const refSpy = jest
        .spyOn(React, 'useRef')
        .mockReturnValue({ current: { showPicker: jest.fn() } });

      render(
        <ProvidedDatePicker
          value=''
          label='Choose a date'
          required
          min='2023-03-30'
          max='2025-03-30'
          onChange={jest.fn()}
        />
      );

      const input = screen.getByLabelText(INPUT_LABEL_REQUIRED);
      fireEvent.focus(input);

      expect(refSpy).toHaveBeenCalled();
    });
  });

  it('should render error message from prop when hasError is true', () => {
    render(
      <ProvidedDatePicker
        value='2023-02-01'
        label='Choose a date'
        min='2023-03-30'
        message='Invalid date.'
        hasError
        onChange={jest.fn()}
      />
    );

    const input = screen.getByLabelText(INPUT_LABEL);
    fireEvent.blur(input);

    expect(screen.getByText('Invalid date.')).toBeVisible();
    expect(input).toHaveStyle(BORDER_BOTTOM_ERROR_STYLE);
  });
});
