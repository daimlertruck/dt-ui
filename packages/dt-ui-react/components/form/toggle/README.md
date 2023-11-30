# Toggle

Switches toggle the state of a single setting on or off.

## Usage

```jsx
import { ChangeEvent, useState } from 'react';
import { Toggle } from '@dt-ui/react';

export const App = () => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(evt.target.checked);
  };

  return <Toggle isChecked={checked} onChange={handleChange} />;
};
```

## API

### Toggle

The component that displays the controls.

| Property         | Type                                           | Default | Description                                                                   |
| ---------------- | ---------------------------------------------- | ------- | ----------------------------------------------------------------------------- |
| `label`          | `string`                                       | -       | A label to help users understand the scope of the toggle.                     |
| `onChange`       | `(evt: ChangeEvent<HTMLInputElement>) => void` | -       | The triggered function when the input change.                                 |
| `dataTestId`     | `string`                                       | toggle  | Toggle test identifier                                                        |
| `isDisabled`     | `boolean`                                      | `false` | Specifies if the element should be disabled.                                  |
| `isChecked`      | `boolean`                                      | `false` | Specifies if the element should be pre-selected (checked) when the page loads |
| `checkedColor`   | `string`                                       | `green` | Specifies the color for the checked state                                     |
| `uncheckedColor` | `string`                                       | `grey`  | Specifies the color for the unchecked state                                   |

### Toggle.Label

The component that displays the label

| Property     | Type        | Default      | Description                      |
| ------------ | ----------- | ------------ | -------------------------------- |
| `dataTestId` | `string`    | toggle-label | Toggle.Label test identifier     |
| `children`   | `ReactNode` | -            | Text to be rendered as the label |
