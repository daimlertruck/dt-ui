import { withProviders } from '@dt-ui/react-core';
import { act, render, screen, fireEvent } from '@testing-library/react';

import { TextArea } from '.';

describe('<TextArea /> component', () => {
  const ProvidedTextArea = withProviders(TextArea);

  it('renders input with an empty value', () => {
    const { getByRole } = render(
      <ProvidedTextArea label='My awesome text area' name='awesome-textarea' />
    );

    const textareInput = getByRole('textbox');

    expect(textareInput).toHaveValue('');
  });

  it('renders input with an value', () => {
    const label = 'My Input with prefilled value';
    const initialValue = 'Initial Value';

    const { container } = render(
      <ProvidedTextArea label={label} value={initialValue} />
    );

    const input = screen.getByLabelText(label);
    const value = screen.getByDisplayValue(initialValue);

    expect(value).toEqual(input);
    expect(container).toMatchSnapshot();
  });

  it('renders input with max length of 200 characters', () => {
    const { getByRole } = render(
      <ProvidedTextArea label='Awesome text area' maxLength={200} />
    );

    const textarea = getByRole('textbox');

    expect(textarea).toHaveProperty('maxLength', 200);
  });

  it('fills input correctly with new value on change Event', () => {
    const onChange = jest.fn();
    const { getByRole } = render(
      <ProvidedTextArea label='My awesome text area' onChange={onChange} />
    );

    const textareInput = getByRole('textbox');

    fireEvent.change(textareInput, { target: { value: 'New input value' } });

    expect(onChange).toHaveBeenCalled();
    expect(textareInput).toHaveValue('New input value');
  });

  it('should have active state on focus', () => {
    const { getByRole } = render(
      <ProvidedTextArea label='My awesome text area' />
    );

    const textarea = getByRole('textbox');

    act(() => {
      textarea.focus();
    });

    expect(textarea).toHaveStyle('outline: 1px solid #00677F');
    expect(textarea).toHaveStyle('border-width: 1px;');
    expect(textarea).toHaveStyle('border-style: solid');
    expect(textarea).toHaveStyle('border-color: transparent');
  });

  describe('onBlur event', () => {
    it("should add 'blur' with empty value", () => {
      const { getByRole } = render(
        <ProvidedTextArea label='My awesome text area' />
      );

      const textarea = getByRole('textbox');

      fireEvent.blur(textarea, { currentTarget: { value: '' } });

      expect(textarea).toHaveStyle('border: 1px solid #dedede');
    });

    it('should have active state', () => {
      const { getByRole, getByTestId } = render(
        <ProvidedTextArea label='Awesome text area' value='value' />
      );

      const textarea = getByRole('textbox');
      const label = getByTestId('label-field');

      fireEvent.blur(textarea, { currentTarget: { value: 'Some value' } });

      expect(label).toHaveStyle('font-size: 0.75rem');
      expect(label).toHaveStyle('transform: translateY(-45%)');
    });
  });
});
