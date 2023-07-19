import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { withProviders } from '../../../utils';

import { Button } from './Button';

describe('<Button /> component', () => {
  const ProvidedButton = withProviders(Button);

  it('renders button html element with the correct title', () => {
    const { container } = render(
      <ProvidedButton onClick={() => null} dataTestId='primary'>
        Primary
      </ProvidedButton>
    );

    expect(container).toMatchSnapshot();
  });

  it('renders a disabled button html element with the correct title', () => {
    render(
      <ProvidedButton
        isDisabled={true}
        variant='outlined'
        color='neutral'
        onClick={() => null}
        dataTestId='secondary'
      >
        Secondary
      </ProvidedButton>
    );

    const secondaryButton = screen.getByTestId('secondary-button');
    expect(secondaryButton).toHaveTextContent('Secondary');
    expect(secondaryButton).toBeDisabled();
  });

  it('triggers the button action correctly', () => {
    const callbackFn = jest.fn();

    render(
      <ProvidedButton
        variant='contained'
        color='error'
        onClick={callbackFn}
        dataTestId='error'
      >
        Error
      </ProvidedButton>
    );

    const button = screen.getByTestId('error-button');
    fireEvent.click(button);

    expect(callbackFn).toBeCalledTimes(1);
  });

  describe('when loading is true', () => {
    it('renders a spinner light theme', () => {
      const { container } = render(
        <ProvidedButton isLoading={true} onClick={() => null}>
          Button loading
        </ProvidedButton>
      );

      expect(container).toMatchSnapshot();
    });

    it('renders a spinner dark theme when variant is outlined', () => {
      const { container } = render(
        <ProvidedButton
          isLoading={true}
          onClick={() => null}
          variant='outlined'
        >
          Button loading
        </ProvidedButton>
      );

      expect(container).toMatchSnapshot();
    });
  });
});
