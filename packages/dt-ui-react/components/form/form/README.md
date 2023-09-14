# Form

The used component to collect user input. It's usually sent the input to the backend.

## Usage

```jsx
import { Form, TextField } from '@dt-ui/react';

export const App = () => {
  return (
    <Form>
      <TextField label='label 1' />
    </Form>
  );
};
```

Also, you can use form groups to group a bunch of fields.

```jsx
import { Form, TextField } from '@dt-ui/react';

export const App = () => {
  return (
    <Form>
      <Form.FormGroup>
        <TextField label='label 1' />
        <TextField label='label 2' />
      </Form.FormGroup>
    </Form>
  );
};
```

## API

### Form

| Property     | Type                                           | Default | Description                     |
| ------------ | ---------------------------------------------- | ------- | ------------------------------- |
| `children`   | `ReactNode`                                    | -       | Child components to be rendered |
| `dataTestId` | `string`                                       | toggle  | Toggle test identifier          |
| `style`      | `React.CSSProperties`                          | -       | Gives the Form css properties   |
| `onSubmit`   | `(event: FormEvent<HTMLFormElement>) => void;` | -       | The HTML form submit handler.   |

### Form.Group

| Property   | Type        | Default | Description                                                                                                                               |
| ---------- | ----------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `children` | `ReactNode` | -       | Child components to be rendered                                                                                                           |
| `title`    | `string`    | -       | Title to be shown at the top of the group                                                                                                 |
| `disabled` | `boolean`   | -       | If group is disabled, a opacity is set and the pointer events set to none                                                                 |
| `tooltip`  | `string`    | -       | If a string is passed to this prop, a info svg will be rendered wrapped in a tooltip. The tooltip content will be the value of this prop. |
| `style`      | `React.CSSProperties`                          | -       | Gives the Form Group css properties   |