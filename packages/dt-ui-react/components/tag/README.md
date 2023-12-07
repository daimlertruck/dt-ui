# Tag

Tags can be used to display states (Active, Cancelled...) in lists, tables, etc.

## Usage

```jsx
import { Tag } from '@dt-ui/react';

export const App = () => {
  return (
    <TagGroup>
      <Tag>Active</Tag>
      <Tag>Inactive</Tag>
    </TagGroup>
  );
};
```

## API

### Tag

| Property      | Type         | Default | Description                                                                                                                                                  |
| ------------- | ------------ | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `children`    | `ReactNode`  | -       | Child components to be rendered                                                                                                                              |
| `dataTestId`  | `string`     | tag     | Customizable test identifier                                                                                                                                 |
| `variant`     | `TagVariant` | solid   | Determines the variant of the tag                                                                                                                            |
| `color`       | `TagColor`   | primary | Determines the color of the tag                                                                                                                              |
| `size`        | `TagSize`    | small   | Determines the size of the tag                                                                                                                               |
| `border`      | `TagBorder`  | squared | Determines the border style of the tag                                                                                                                       |
| `isDisabled`  | `boolean`    | false   | Specifies if the element should be disabled                                                                                                                  |
| `isClickable` | `boolean`    | false   | Specifies if the element should have the clickable styles                                                                                                    |
| `onClick`     | `function`   | -       | The triggered function when the tag is clicked. This also applies the clickable styles. If the component has the onClose property this will not be triggered |
| `onClose`     | `function`   | -       | The triggered function when closing the tag                                                                                                                  |

### TagGroup

| Property   | Type                  | Default | Description                  |
| ---------- | --------------------- | ------- | ---------------------------- |
| `children` | `ReactNode`           | -       | Group of Tags to be rendered |
| `style`    | `React.CSSProperties` | -       | Customizable styles          |
