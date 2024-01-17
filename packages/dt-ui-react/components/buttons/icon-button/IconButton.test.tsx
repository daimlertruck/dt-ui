import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { EditIcon } from '../../../core';
import { withProviders } from '../../../utils';

import { IconButton } from './IconButton';

describe('<IconButton /> component', () => {
  const ProvidedIconButton = withProviders(IconButton);

  it('renders button html element with the an icon', () => {
    const { container } = render(
      <ProvidedIconButton color='primary' onClick={() => null}>
        <EditIcon />
      </ProvidedIconButton>
    );

    expect(container).toMatchSnapshot();
  });

  it('renders a disabled button html element', () => {
    render(
      <ProvidedIconButton color='primary' isDisabled onClick={() => null}>
        <EditIcon />
      </ProvidedIconButton>
    );

    const disabledButton = screen.getByTestId('icon-button');
    expect(disabledButton).toBeDisabled();
  });

  it('triggers the IconButton action correctly', () => {
    const callbackFn = jest.fn();

    render(
      <ProvidedIconButton
        color='error'
        dataTestId='error-icon-button'
        onClick={callbackFn}
      >
        <EditIcon />
      </ProvidedIconButton>
    );

    const button = screen.getByTestId('error-icon-button');
    fireEvent.click(button);

    expect(callbackFn).toBeCalledTimes(1);
  });
});
