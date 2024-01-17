# MultiSelect

This component can handle multiple selections and remove them.

## Usage

```jsx
import { MultiSelect } from '@dt-ui/react';

const OPTIONS = [
  { text: 'Option 1', value: '1' },
  { text: 'Option 2', value: '2' },
  { text: 'Option 3', value: '3' },
  { text: 'Option 4', value: '4' },
];

export const App = () => {
  return (
    <MultiSelect>
      <MultiSelect.Select label='Label'>
        {options.map((option) => (
          <MultiSelect.Option key={option.value} option={option}>
            {option.text ?? option.value}
          </MultiSelect.Option>
        ))}
      </MultiSelect.Select>
    </MultiSelect>
  );
};
```

## API

### MultiSelect

| Property       | Type                     | Default        | Description                                                   |
| -------------- | ------------------------ | -------------- | ------------------------------------------------------------- |
| `children`     | `ReactNode`              | -              | Child components to be rendered                               |
| `defaultValue` | `MultiSelectOptionValue` | -              | Initial selected option                                       |
| `style`        | `React.CSSProperties`    | -              | Gives the MultiSelect Box css properties                      |
| `dataTestId`   | `string`                 | `multi-select` | Customizable test identifier                                  |
| `name`         | `string`                 | -              | The attribute to specify the name of the multi-select element |

### MultiSelect.Select

| Property     | Type                  | Default             | Description                                                    |
| ------------ | --------------------- | ------------------- | -------------------------------------------------------------- |
| `children`   | `ReactNode`           | -                   | Child components to be rendered                                |
| `label`      | `string`              | -                   | A text to help users understand the scope of the multi-select. |
| `style`      | `React.CSSProperties` | -                   | Gives the MultiSelect Box css properties                       |
| `dataTestId` | `string`              | `multi-select-item` | Customizable test identifier                                   |
| `isDisabled` | `boolean`             | `false`             | Set the multi-select disabled.                                 |
| `hasError`   | `boolean`             | `false`             | Set error state for multi-select                               |

### MultiSelect.Option

| Property     | Type                       | Default                              | Description                                       |
| ------------ | -------------------------- | ------------------------------------ | ------------------------------------------------- |
| `children`   | `ReactNode`                | -                                    | Child components to be rendered                   |
| `option`     | `MultiSelectOptionValue`   | -                                    | The option object.                                |
| `dataTestId` | `string`                   | `multi-select-option-{option.value}` | Customizable test identifier                      |
| `isDisabled` | `boolean`                  | `false`                              | Set the multi-select disabled.                    |
| `onClick`    | `(option: string) => void` | -                                    | The triggered function when clicked on the option |
