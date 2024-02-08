# Tag

Tags can be used to display states (Active, Cancelled...) in lists, tables, etc.

If the content of the tag exceeds the limit of 150px, it collapses with an ellipsis.

## Usage

```jsx
import { Tag } from '@dt-ui/react';

export const App = () => {
  return (
    <Tag>Active</Tag>
  );
};
```

## API

### Tag

| Property     | Type        | Default | Description                                    |
| ------------ | ----------- | ------- | ---------------------------------------------- |
| `children`   | `ReactNode` | -       | Child components to be rendered                |
| `dataTestId` | `string`    | tag     | Customizable test identifier                   |
| `variant`    | `string`    | colored | Determines the variant of the tag              |
| `isDisabled` | `boolean`   | false   | Specifies if the element should be disabled    |
| `isClickable`| `boolean`   | false   | Specifies if the element can be clicked        |
| `onClick`    | `function`  | -       | The triggered function when clicked on the tag |
| `onClose`    | `function`  | -       | The triggered function when closing the tag    |
