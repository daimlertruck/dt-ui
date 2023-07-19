# List

List represents an unordered list of items, typically rendered as a bulleted list.

## Usage

```jsx
import { List } from '@dt-ui/react';

export const App = () => {
  return (
    <List>
      <li>Item 1</li>
      <li>Item 2</li>
    </List>
  );
};
```

## API

### List

| Property        | Type                  | Default              | Description                                              |
| --------------- | --------------------- | -------------------- | -------------------------------------------------------- |
| `children`      | `ReactNode`           | -                    | Child components to be rendered. Usually `<li>` elements |
| `listStyleType` | `enum<ListStyleType>` | `ListStyleType.Disc` | Specifies the type of list-item marker in a list.        |

### List.Title

| Property   | Type        | Default | Description                      |
| ---------- | ----------- | ------- | -------------------------------- |
| `children` | `ReactNode` | -       | Child components to be rendered. |

### List.CounterListItem

| Property   | Type        | Default | Description                      |
| ---------- | ----------- | ------- | -------------------------------- |
| `children` | `ReactNode` | -       | Child components to be rendered. |
