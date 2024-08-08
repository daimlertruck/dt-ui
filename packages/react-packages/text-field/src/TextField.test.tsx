import { withProviders } from '@dt-ui/react-core';
import { Icon } from '@dt-ui/react-icon';
import { act, render, screen, fireEvent } from '@testing-library/react';

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
        initialValue='Initial Value'
        label='My Input with prefilled value'
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
        hasError
        initialValue='Initial Value'
        label='My Input with Error Message'
        message='My Error Message'
      />
    );

    expect(container).toMatchSnapshot();
  });

  it('should render the TextField with info message', () => {
    const { container } = render(
      <ProvidedTextField
        hasError={false}
        label='My Input with info message'
        message='My Infor Message'
      />
    );

    expect(container).toMatchSnapshot();
  });

  it('renders disabled input', () => {
    const { container } = render(
      <ProvidedTextField disabled label='My disabled input' />
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
      <ProvidedTextField
        label='Required text'
        required
        requiredMessage='This field is required.'
      />
    );

    expect(container.querySelector('label')).toHaveTextContent(
      'Required text*'
    );
  });

  it('should have active state on focus', () => {
    const { container } = render(<ProvidedTextField label='Some text' />);

    const input = container.querySelector('input') as HTMLElement;
    const label = container.querySelector('label') as HTMLElement;

    act(() => {
      input.focus();
    });

    expect(label).toHaveStyle('font-size: 0.75rem');
    expect(label).toHaveStyle('transform: translateY(-45%)');
    expect(input).toHaveStyle('outline: 0;');
    expect(input).toHaveStyle('border-width: 1px;');
    expect(input).toHaveStyle('border-style: solid');
    expect(input).toHaveStyle('border-color: #00677F;');
  });

  describe('onBlur event', () => {
    it('should have error state with error message', () => {
      const { container } = render(
        <ProvidedTextField
          label='Some text'
          required
          requiredMessage='This field is required.'
        />
      );
      const input = container.querySelector('input') as HTMLElement;

      fireEvent.blur(input, { currentTarget: { value: '' } });

      expect(input).toHaveStyle('border-width: 1px;');
      expect(input).toHaveStyle('border-style: solid;');
      expect(input).toHaveStyle('border-color: #ff494a;');
      expect(container).toMatchSnapshot();
    });

    it('should have active state', () => {
      const { container } = render(
        <ProvidedTextField initialValue='Value' label='Some text' required />
      );
      const input = container.querySelector('input') as HTMLElement;
      const label = container.querySelector('label') as HTMLElement;

      fireEvent.blur(input, { currentTarget: { value: 'Some value' } });

      expect(label).toHaveStyle('font-size: 0.75rem');
      expect(label).toHaveStyle('transform: translateY(-45%)');
    });
  });

  it('renders input with extras suffix and prefix elements', () => {
    const icon = <Icon code='home_work' />;
    const { container } = render(
      <ProvidedTextField
        extraPrefix={icon}
        extraSuffix={icon}
        label='My input'
      />
    );

    expect(container).toMatchSnapshot();
  });

  it('renders input with variant baseLine', () => {
    const { container } = render(
      <ProvidedTextField label='My input' variant='bottomLine' />
    );

    expect(container).toMatchSnapshot();
  });

  it('renders input without float label', () => {
    const { container } = render(
      <ProvidedTextField isFloatingLabel={false} label='My input' />
    );

    expect(container).toMatchSnapshot();
  });
});
