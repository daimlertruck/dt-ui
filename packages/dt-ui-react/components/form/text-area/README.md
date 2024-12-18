# TextArea

The `<TextArea>` is a plain text component to allow our users to type whatever they want.

## Usage

```jsx
import { TextArea } from '@dt-ui/react';

export const App = () => {
  return <TextArea label='My text area' maxLength={200} />;
};
```

## API

### TextArea

Represents the HTML element

| Property     | Type                                              | Default                                  | Description                                                                                                                              |
| ------------ | ------------------------------------------------- | ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `label`      | `string`                                          | -                                        | Label to show in the textarea.                                                                                                           |
| `required`   | `boolean`                                         | -                                        | Sets the \* on the textarea label.                                                                                                       |
| `value`      | `string`                                          | -                                        | Value to be rendered by the textarea.                                                                                                    |
| `name`       | `string`                                          | `${label.replaceAll(' ', '-')}-textarea` | A string specifying a name for the input control. This name is submitted along with the control's value when the form data is submitted. |
| `dataTestId` | `string`                                          | `${label.replaceAll(' ', '-')}-textarea` | Textarea test identifier.                                                                                                                |
| `maxLength`  | `number`                                          | -                                        | The maximum number of characters (UTF-16 code units) that the user can enter.                                                            |
| `helperText` | `string \| null`                                  | -                                        | The message to be displayed below the textarea.                                                                                          |
| `hasError`   | `boolean`                                         | -                                        | Set the error state for textarea.                                                                                                        |
| `onChange`   | `(evt: ChangeEvent<HTMLTextAreaElement>) => void` | -                                        | The triggered function when the input change.                                                                                            |
| `onFocus`    | `(evt: ChangeEvent<HTMLTextAreaElement>) => void` | -                                        | The triggered function when entering the textarea.                                                                                       |
| `onBlur`     | `(evt: ChangeEvent<HTMLTextAreaElement>) => void` | -                                        | The triggered function when leaving the textarea.                                                                                        |
