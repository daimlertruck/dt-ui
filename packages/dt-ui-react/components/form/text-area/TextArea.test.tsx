import { fireEvent, render, screen } from '@testing-library/react';

import { withProviders } from '../../../utils';

import { TextArea } from '.';

const BORDER_BOTTOM_ERROR_STYLE = 'border-bottom: 2px solid #D21C1C';
const INPUT_LABEL = 'My text area';
const INPUT_LABEL_REQUIRED = `${INPUT_LABEL} *`;
const LABEL_TEST_ID = 'label-field';

describe('<TextArea /> component', () => {
  const ProvidedTextArea = withProviders(TextArea);

  it('should render textarea correctly', () => {
    const { container } = render(
      <ProvidedTextArea
        value='description'
        label={INPUT_LABEL}
        maxLength={200}
        onChange={jest.fn()}
      />
    );

    expect(container).toMatchSnapshot();
  });

  it('should call onChange when changing textarea input value', () => {
    const onChange = jest.fn();
    render(
      <ProvidedTextArea value='' label={INPUT_LABEL} onChange={onChange} />
    );

    const input = screen.getByLabelText(INPUT_LABEL);
    fireEvent.change(input, { target: { value: 'description' } });

    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('should call onFocus when focusing on the textarea and change label positioning', () => {
    const onFocus = jest.fn();
    render(
      <ProvidedTextArea
        value=''
        label={INPUT_LABEL}
        onFocus={onFocus}
        onChange={jest.fn()}
      />
    );

    const input = screen.getByLabelText(INPUT_LABEL);
    const label = screen.getByTestId(LABEL_TEST_ID);

    expect(label).toHaveStyle('transform: translateY(0)');

    fireEvent.focus(input);

    expect(label).toHaveStyle('transform: translateY(-45%)');
    expect(onFocus).toHaveBeenCalledTimes(1);
  });

  it('should call onBlur when leaving the textarea', () => {
    const onBlur = jest.fn();
    render(
      <ProvidedTextArea
        value=''
        label={INPUT_LABEL}
        onBlur={onBlur}
        onChange={jest.fn()}
      />
    );

    const input = screen.getByLabelText(INPUT_LABEL);
    fireEvent.blur(input);

    expect(onBlur).toHaveBeenCalledTimes(1);
  });

  it('should render error message with error styles when hasError is true', () => {
    render(
      <ProvidedTextArea
        label={INPUT_LABEL}
        hasError
        helperText='invalid text.'
        onChange={jest.fn()}
      />
    );

    const input = screen.getByLabelText(INPUT_LABEL);
    fireEvent.blur(input);

    expect(screen.getByText('invalid text.')).toBeVisible();
    expect(input).toHaveStyle(BORDER_BOTTOM_ERROR_STYLE);
  });

  it('should render number of remaining characters if maxLength is true', () => {
    render(
      <ProvidedTextArea
        value='text'
        label={INPUT_LABEL}
        maxLength={10}
        onChange={jest.fn()}
      />
    );

    const input = screen.getByLabelText(INPUT_LABEL);
    fireEvent.blur(input);

    expect(screen.getByText('6 Characters')).toBeVisible();
  });

  it('should not render number of remaining characters if maxLength is undefined', () => {
    render(
      <ProvidedTextArea value='text' label={INPUT_LABEL} onChange={jest.fn()} />
    );

    const input = screen.getByLabelText(INPUT_LABEL);
    fireEvent.blur(input);

    expect(screen.queryByText('5 Characters')).toBeNull();
  });

  it('should render label and required if its passed as prop', () => {
    render(
      <ProvidedTextArea
        value='text'
        label={INPUT_LABEL}
        required
        onChange={jest.fn()}
      />
    );

    expect(screen.getByTestId(LABEL_TEST_ID)).toBeVisible();
    expect(screen.getByText(INPUT_LABEL_REQUIRED)).toBeVisible();
  });

  it('should not render label if label is not passed as prop', () => {
    render(<ProvidedTextArea value='text' onChange={jest.fn()} />);

    expect(screen.queryByTestId(LABEL_TEST_ID)).toBeNull();
  });
});
