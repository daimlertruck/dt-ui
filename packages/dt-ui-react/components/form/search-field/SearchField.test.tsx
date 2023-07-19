import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import { withProviders } from '../../../utils';

import { SearchField } from './SearchField';

describe('<SearchField /> component', () => {
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
});
