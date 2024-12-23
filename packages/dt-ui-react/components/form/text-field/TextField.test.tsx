import { act, render, screen, fireEvent } from '@testing-library/react';

import { withProviders } from '../../../utils';

import { TextField } from './TextField';

describe('<TextField /> component', () => {
  const ProvidedTextField = withProviders(TextField);

  const hasInputValue = (e: HTMLElement, inputValue: string) => {
    return screen.getByDisplayValue(inputValue) === e;
  };

  const renderInput = () => {
    const { container } = render(
      <ProvidedTextField label='My Awesome Input' />
    );
    const input = container.querySelector('input') as HTMLElement;
    return { input };
  };

  it('renders input with an empty initial value', () => {
    const { input } = renderInput();
    expect(input).toHaveValue('');
  });

  it('renders input with an initial value', () => {
    render(
      <ProvidedTextField
        label='My Input with prefilled value'
        initialValue='Initial Value'
      />
    );

    const input = screen.getByLabelText('My Input with prefilled value');
    expect(hasInputValue(input, 'Initial Value')).toBe(true);
  });

  it('fills input correctly with new value on change Event', () => {
    const { input } = renderInput();
    fireEvent.change(input, { target: { value: 'New input value' } });

    expect(hasInputValue(input, 'New input value')).toBe(true);
  });

  it('should render the TextField with error styles and message', () => {
    const { container } = render(
      <ProvidedTextField
        label='My Input with Error Message'
        message='My Error Message'
        initialValue='Initial Value'
        hasError={true}
      />
    );

    expect(container).toMatchSnapshot();
  });

  it('should render the TextField with info message', () => {
    const { container } = render(
      <ProvidedTextField
        label='My Input with info message'
        message='My Infor Message'
        hasError={false}
      />
    );

    expect(container).toMatchSnapshot();
  });

  it('renders disabled input', () => {
    const { container } = render(
      <ProvidedTextField label='My disabled input' isDisabled={true} />
    );

    expect(container).toMatchSnapshot();
  });

  it('renders hiddent text input', () => {
    const { container } = render(
      <ProvidedTextField label='Hidden text' type='password' />
    );

    expect(container.querySelector('input')).toHaveAttribute(
      'type',
      'password'
    );
  });

  it('renders required text field', () => {
    const { container } = render(
      <ProvidedTextField label='Required text' required={true} />
    );

    expect(container.querySelector('label')).toHaveTextContent(
      'Required text *'
    );
  });

  it('should have active state on focus', () => {
    const { container } = render(<ProvidedTextField label='Some text' />);

    const input = container.querySelector('input') as HTMLElement;
    const label = container.querySelector('label') as HTMLElement;

    act(() => {
      input.focus();
    });

    expect(label).toHaveStyle('font-size: .75rem');
    expect(label).toHaveStyle('transform: translateY(-45%)');
  });

  it('renders Loading input', () => {
    const { container } = render(
      <ProvidedTextField label='My disabled input' isLoading={true} />
    );

    expect(container).toMatchSnapshot();
  });

  describe('onBlur event', () => {
    it('should have error state with error message', () => {
      const { container } = render(
        <ProvidedTextField label='Some text' required={true} />
      );
      const input = container.querySelector('input') as HTMLElement;

      fireEvent.blur(input, { currentTarget: { value: '' } });

      expect(input).toHaveStyle('border-bottom: 2px solid #D21C1C');
      expect(container).toMatchSnapshot();
    });

    it('should have active state', () => {
      const { container } = render(
        <ProvidedTextField
          label='Some text'
          required={true}
          initialValue='Value'
        />
      );
      const input = container.querySelector('input') as HTMLElement;
      const label = container.querySelector('label') as HTMLElement;

      fireEvent.blur(input, { currentTarget: { value: 'Some value' } });

      expect(label).toHaveStyle('font-size: .75rem');
      expect(label).toHaveStyle('transform: translateY(-45%)');
    });
  });

  it('renders input with side button', () => {
    const button = <button>My button</button>;
    const { container } = render(
      <ProvidedTextField label='My input' icon={button} />
    );

    expect(container).toMatchSnapshot();
  });

  it('should render the TextField without floating label', () => {
    render(<ProvidedTextField initialValue='Initial Value' />);

    const label = screen.queryByRole('textbox');

    expect(label).not.toHaveAttribute('label');
  });
});
