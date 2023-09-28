import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import { withProviders } from '../../../utils';

import { SearchField } from './SearchField';

describe('<SearchField /> component', () => {
  jest.useFakeTimers();

  const ProvidedSearchField = withProviders(SearchField);

  it('renders SearchField input element with the correct label', () => {
    const { container } = render(
      <ProvidedSearchField label='Search for anything' />
    );

    expect(container).toMatchSnapshot();
  });

  it('fills Search input correctly with new value on change Event', () => {
    const { getByLabelText } = render(
      <ProvidedSearchField label='Search for anything' />
    );
    const input = getByLabelText('Search for anything');

    fireEvent.change(input, {
      target: { value: 'New search query value' },
    });

    expect(input).toHaveValue('New search query value');
  });

  it('calls the onChange callback when input changes', () => {
    const mockOnChange = jest.fn();

    const { container } = render(
      <ProvidedSearchField label='Search' onChange={mockOnChange} />
    );
    const input = container.querySelector('input') as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'test' } });
    jest.advanceTimersByTime(1000);

    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  it('calls the onClick callback when the icon is clicked', () => {
    const mockOnClick = jest.fn();
    const { getByTestId } = render(
      <ProvidedSearchField label='Search' onClick={mockOnClick} />
    );

    const icon = getByTestId('search-field-icon');

    fireEvent.click(icon);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('renders SearchField input element with spinner when loading is true', () => {
    const { container } = render(
      <ProvidedSearchField label='Label' isLoading={true} />
    );

    expect(container).toMatchSnapshot();
  });
});
