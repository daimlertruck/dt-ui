# Checbox

The component to select or unselect an option

## Usage

```jsx
import { Checkbox } from '@dt-ui/react';

export const App = () => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(evt.target.checked);
  };

  return (
    <Checkbox isChecked={checked} onChange={handleChange}>
      Label
    </Checkbox>
  );
};
```

## API

### Checkbox

| Property     | Type                                           | Default    | Description                                                                   |
| ------------ | ---------------------------------------------- | ---------- | ----------------------------------------------------------------------------- |
| `children`   | `ReactNode`                                    | -          | Child components to be rendered as the label.                                 |
| `onChange`   | `(evt: ChangeEvent<HTMLInputElement>) => void` | -          | The triggered function when the input change.                                 |
| `isDisabled` | `boolean`                                      | `false`    | Specifies if the element should be disabled.                                  |
| `isChecked`  | `boolean`                                      | `false`    | Specifies if the element should be pre-selected (checked) when the page loads |
| `dataTestId` | `string`                                       | `checkbox` | Customizable test identifier                                                  |
