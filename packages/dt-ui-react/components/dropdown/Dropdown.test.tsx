import { fireEvent, render, screen, within } from '@testing-library/react';
import React from 'react';

import { withDropdownProvider, withProviders } from '../../utils';

import { Dropdown } from '.';

describe('<Dropdown /> component', () => {
  const ProvidedDropdown = withProviders(withDropdownProvider(Dropdown));

  const OPTIONS = [
    { text: 'Option 1', value: '1' },
    { text: 'Option 2', value: '2' },
  ];

  const mockendFunction = () => jest.fn();

  it('renders dropdown correctly', () => {
    render(
      <ProvidedDropdown name='test-dropdown'>
        <Dropdown.Select label='Label'>
          {OPTIONS.map((option) => (
            <Dropdown.Option
              key={option.value}
              onClick={mockendFunction}
              option={option}
            >
              {option.text ?? option.value}
            </Dropdown.Option>
          ))}
        </Dropdown.Select>
        <Dropdown.Detail>A short message.</Dropdown.Detail>
      </ProvidedDropdown>
    );

    const select = screen.getByRole('button');
    expect(select.textContent).toContain('Label');
    expect(select.textContent).toContain('Select an option');
    fireEvent.click(select);

    const menu = screen.getByRole('menu');
    const optionsEl = within(menu).getAllByRole('option');
    expect(optionsEl.length).toEqual(2);
  });

  it('renders dropdown menu correctly', () => {
    const { container } = render(
      <ProvidedDropdown name='test-dropdown'>
        <Dropdown.Select label='Label'>
          {OPTIONS.map((option) => (
            <Dropdown.Option
              key={option.value}
              onClick={mockendFunction}
              option={option}
            >
              {option.text ?? option.value}
            </Dropdown.Option>
          ))}
        </Dropdown.Select>
        <Dropdown.Detail>A short message.</Dropdown.Detail>
      </ProvidedDropdown>
    );

    const select = screen.getByRole('button');
    fireEvent.click(select);

    expect(container).toMatchSnapshot();
  });

  it('renders disabled dropdown', () => {
    render(
      <ProvidedDropdown>
        <Dropdown.Select label='Label'>
          <Dropdown.Option option={OPTIONS[0]}>
            {OPTIONS[0].text ?? OPTIONS[0].value}
          </Dropdown.Option>
        </Dropdown.Select>
        <Dropdown.Detail>A short message.</Dropdown.Detail>
      </ProvidedDropdown>
    );

    const select = screen.getByTestId('dropdown-select');
    expect(select).toBeDisabled();
  });

  it('renders a dropdown without border', () => {
    const { container } = render(
      <ProvidedDropdown>
        <Dropdown.Select hasBorder={false} label='Label'>
          {OPTIONS.map((option) => (
            <Dropdown.Option key={option.value} option={option}>
              {option.text ?? option.value}
            </Dropdown.Option>
          ))}
        </Dropdown.Select>
      </ProvidedDropdown>
    );

    expect(container).toMatchSnapshot();
  });
});
