# Radio

The component to select one option from a set.

## Usage

```jsx
import { Radio, RadioGroup } from '@dt-ui/react';

export const App = () => {
  return (
    <RadioGroup onChange={onChange} name='group-name'>
      <Radio value='1' label='Label 1' isDefaultChecked={true} />
      <Radio value='2' label='Label 2' isDisabled={true} />
    </RadioGroup>
  );
};
```

## API

### Radio

| Property           | Type                                           | Default            | Description                                                                           |
| ------------------ | ---------------------------------------------- | ------------------ | ------------------------------------------------------------------------------------- |
| `label`            | `string`                                       | -                  | A label to help users understand the scope of the radio.                              |
| `onChange`         | `(evt: ChangeEvent<HTMLInputElement>) => void` | -                  | The triggered function when the input change.                                         |
| `isDisabled`       | `boolean`                                      | `false`            | Specifies if the element should be disabled.                                          |
| `isDefaultChecked` | `boolean`                                      | `false`            | If present, indicates that this radio button is the default selected one in the group |
| `name`             | `string`                                       | 'radio-group-name' | Should represent the group name                                                       |
| `value`            | `string`                                       | -                  | String containing the radio button's value                                            |

### RadioGroup

| Property     | Type                                           | Default | Description                                   |
| ------------ | ---------------------------------------------- | ------- | --------------------------------------------- |
| `children`   | `ReactNode`                                    | -       | Child components to be rendered               |
| `dataTestId` | `string`                                       | -       | Customizable test identifier                  |
| `direction`  | "row" \| "column"                              | row     | Sets the flex direction of the group          |
| `name`       | `string`                                       | -       | Should represent the group name               |
| `onChange`   | `(evt: ChangeEvent<HTMLInputElement>) => void` | -       | The triggered function when the input change. |
