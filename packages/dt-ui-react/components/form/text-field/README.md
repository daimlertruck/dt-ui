# TextField

Textfield allow users to enter and edit text. They typically appear in forms and modal windows.

## Usage

```jsx
import { TextField } from '@dt-ui/react';

export const App = () => {
  return <TextField label='My Input' message='My Message' />;
};
```

## API

### TextField

| Property       | Type                     | Default | Description                                                         |
| -------------- | ------------------------ | ------- | ------------------------------------------------------------------- |
| `children`     | `ReactNode`              | -       | Child components to be rendered inside input field.                 |
| `label`        | `string`                 | -       | A label to help users understand the scope of the text field.       |
| `initialValue` | `string`                 | -       | Sets the initial value of the text field.                           |
| `message`      | `string \| ReactNode \| null`         | -       | The message to be displayed below the input field.                  |
| `hasError`     | `boolean`                | -       | Set error state for text field.                                     |
| `isDisabled`   | `boolean`                | -       | Determines the disabled state of input field.                       |
| `isLoading`    | `boolean`                | -       | If set to true, the text field is disabled and a spinner is showed. |
| `name`         | `string`                 | -       | The attribute to specify the name of the text field.                |
| `required`     | `boolean`                | -       | Set error state with a message: "This field is required."           |
| `style`        | `CSSProperties`          | -       | Add css style directly to the text field.                           |
| `inputRef`     | `RefObject`              | -       | Provides a way to access DOM node or React element reference.       |
| `maxLength`    | `number`                 | -       | The maximum number of characters that user can enter.               |
| `type`         | `HTMLInputTypeAttribute` | `text`  | Used to specify the type of element to display.                     |
| `onChange`     | `function`               | -       | The triggered function when the input change.                       |
| `iconButton`   | `ReactNode`              | -       | Component to be rendered on the right side on the input field       |
