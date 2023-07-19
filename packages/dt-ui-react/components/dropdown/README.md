# Dropdown

The component to select value from options.

## Usage

```jsx
import { Dropdown } from '@dt-ui/react';

const OPTIONS = [
  { text: 'Option 1', value: '1' },
  { text: 'Option 2', value: '2' },
];

export const App = () => {
  return (
    <Dropdown>
      <Dropdown.Select label='Label'>
        {options.map((option, idx) => (
          <Dropdown.Option key={idx} option={option}>
            {option.text ?? option.value}
          </Dropdown.Option>
        ))}
      </Dropdown.Select>
    </Dropdown>
  );
};
```

## API

### Dropdown

| Property       | Type                  | Default    | Description                                               |
| -------------- | --------------------- | ---------- | --------------------------------------------------------- |
| `children`     | `ReactNode`           | -          | Child components to be rendered                           |
| `defaultValue` | `DropdownOptionValue` | -          | Initial selected option                                   |
| `style`        | `React.CSSProperties` | -          | Gives the Box Dropdown css properties                     |
| `dataTestId`   | `string`              | `dropdown` | Customizable test identifier                              |
| `name`         | `string`              | -          | The attribute to specify the name of the dropdown element |

### Dropdown.Select

| Property     | Type                  | Default           | Description                                                |
| ------------ | --------------------- | ----------------- | ---------------------------------------------------------- |
| `children`   | `ReactNode`           | -                 | Child components to be rendered                            |
| `label`      | `string`              | -                 | A text to help users understand the scope of the dropdown. |
| `style`      | `React.CSSProperties` | -                 | Gives the Box Dropdown css properties                      |
| `dataTestId` | `string`              | `dropdown-select` | Customizable test identifier                               |
| `isDisabled` | `boolean`             | `false`           | Set the dropdown disabled.                                 |
| `hasBorder`  | `boolean`             | `true`            | Set a border to the component.                             |
| `hasError`   | `boolean`             | `false`           | Set error state for dropdown                               |

### Dropdown.Menu

| Property     | Type        | Default | Description                     |
| ------------ | ----------- | ------- | ------------------------------- |
| `children`   | `ReactNode` | -       | Child components to be rendered |
| `dataTestId` | `string`    | `menu`  | Customizable test identifier    |

### Dropdown.Option

| Property     | Type                       | Default                          | Description                                       |
| ------------ | -------------------------- | -------------------------------- | ------------------------------------------------- |
| `children`   | `ReactNode`                | -                                | Child components to be rendered                   |
| `option`     | `DropdownOptionValue`      | -                                | The option object.                                |
| `dataTestId` | `string`                   | `dropdown-option-{option.value}` | Customizable test identifier                      |
| `isDisabled` | `boolean`                  | `false`                          | Set the dropdown disabled.                        |
| `onClick`    | `(option: string) => void` | -                                | The triggered function when clicked on the option |
