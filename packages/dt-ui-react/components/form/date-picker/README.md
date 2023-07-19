# DatePicker

DatePicker allow users to select a date from a calendar. They typically appear in forms and modal windows.

## Usage

```jsx
import { DatePicker } from '@dt-ui/react';

export const App = () => {
  return <DatePicker label='Choose a date' min='2023-03-30' max='2025-03-30' />;
};
```

## API

### DatePicker

| Property       | Type             | Default | Description                                                    |
| -------------- | ---------------- | ------- | -------------------------------------------------------------- |
| `children`     | `ReactNode`      | -       | Child components to be rendered inside input field.            |
| `label`        | `string`         | -       | A label to help users understand the scope of the date picker. |
| `initialValue` | `string`         | -       | Sets the initial value of the date picker.                     |
| `message`      | `string \| null` | -       | The message to be displayed below the input field.             |
| `hasError`     | `boolean`        | -       | Set error state for text field.                                |
| `isDisabled`   | `boolean`        | -       | Determines the disabled state of input field.                  |
| `name`         | `string`         | -       | The attribute to specify the name of the date picker.          |
| `required`     | `boolean`        | -       | Set error state with a message: "This field is required."      |
| `style`        | `CSSProperties`  | -       | Add css style directly to the text field.                      |
| `onChange`     | `function`       | -       | The triggered function when the input change.                  |
| `min`          | `string`         | -       | Specifies the minimum value for the input element              |
| `max`          | `string`         | -       | Specifies the maximum value for the input element              |
