import { fireEvent, render, screen, within } from '@testing-library/react';
import React from 'react';

import { withMultiSelectProvider, withProviders } from '../../utils';

import { MultiSelect } from '.';

describe('<MultiSelect /> component', () => {
  const ProvidedMultiSelect = withProviders(
    withMultiSelectProvider(MultiSelect)
  );

  const OPTIONS = [
    { text: 'Option 1', value: '1', isRemovable: true },
    { text: 'Option 2', value: '2', isRemovable: true },
    { text: 'Option 3', value: '3', isRemovable: true },
    { text: 'Option 4', value: '4' },
  ];

  const DEFAULT_OPTION = [{ text: 'Option 2', value: '2' }];

  const mockedFunction = () => jest.fn();

  it('renders multi-select correctly', () => {
    render(
      <ProvidedMultiSelect name='test-multi-select'>
        <MultiSelect.Select label='Label' placeholder='Select the Items'>
          {OPTIONS.map((option, idx) => (
            <MultiSelect.Option
              key={idx}
              option={option}
              onClick={mockedFunction}
            >
              {option.text ?? option.value}
            </MultiSelect.Option>
          ))}
        </MultiSelect.Select>
      </ProvidedMultiSelect>
    );

    const select = screen.getByTestId('multi-select-item');
    expect(select.textContent).toContain('Label');
    expect(select.textContent).toContain('Select the Items');
    fireEvent.click(select);

    const menu = screen.getByRole('menu');
    const optionsEl = within(menu).getAllByRole('option');
    expect(optionsEl.length).toEqual(4);
  });

  it('renders multi-select with the defaultValue', () => {
    render(
      <ProvidedMultiSelect
        defaultValue={DEFAULT_OPTION}
        name='test-multi-select'
      >
        <MultiSelect.Select label='Label' placeholder='Select the Items'>
          {OPTIONS.map((option, idx) => (
            <MultiSelect.Option
              key={idx}
              option={option}
              onClick={mockedFunction}
            >
              {option.text ?? option.value}
            </MultiSelect.Option>
          ))}
        </MultiSelect.Select>
      </ProvidedMultiSelect>
    );

    const select = screen.getByTestId('multi-select-item');
    expect(select.textContent).toContain('Option 2');
  });

  it('renders multi-select with the correct selected options', () => {
    render(
      <ProvidedMultiSelect name='test-multi-select'>
        <MultiSelect.Select label='Label'>
          {OPTIONS.map((option, idx) => (
            <MultiSelect.Option
              key={idx}
              option={option}
              onClick={mockedFunction}
            >
              {option.text ?? option.value}
            </MultiSelect.Option>
          ))}
        </MultiSelect.Select>
      </ProvidedMultiSelect>
    );

    const select = screen.getByTestId('multi-select-item');
    fireEvent.click(select);

    const option1 = screen.getByText('Option 1');
    fireEvent.click(option1);
    expect(select.textContent).toContain('Option 1');

    const option2 = screen.getByText('Option 2');
    fireEvent.click(option2);
    expect(select.textContent).toContain('Option 2');
  });

  it('renders multi-selectand remove a selected option from the list', () => {
    render(
      <ProvidedMultiSelect name='test-multi-select'>
        <MultiSelect.Select label='Label'>
          {OPTIONS.map((option, idx) => (
            <MultiSelect.Option
              key={idx}
              option={option}
              onClick={mockedFunction}
            >
              {option.text ?? option.value}
            </MultiSelect.Option>
          ))}
        </MultiSelect.Select>
      </ProvidedMultiSelect>
    );

    const select = screen.getByTestId('multi-select-item');
    fireEvent.click(select);

    const option1 = screen.getByText('Option 1');
    fireEvent.click(option1);

    const closeTag = screen.getByTestId('multi-select-tag');
    const closeOption = screen.getByTestId('multi-select-tag-close-button');
    fireEvent.click(closeOption);
    expect(closeTag).not.toBeInTheDocument();
  });

  it('renders multi-select with not removable option', () => {
    render(
      <ProvidedMultiSelect defaultValue={[OPTIONS[3]]} name='test-multi-select'>
        <MultiSelect.Select label='Label'>
          {OPTIONS.map((option, idx) => (
            <MultiSelect.Option
              key={idx}
              option={option}
              onClick={mockedFunction}
            >
              {option.text ?? option.value}
            </MultiSelect.Option>
          ))}
        </MultiSelect.Select>
      </ProvidedMultiSelect>
    );

    const tag = screen.getByTestId('multi-select-tag');
    const tagCloseButton = tag.querySelector('button');
    expect(tag).not.toContainElement(tagCloseButton);
  });
});
