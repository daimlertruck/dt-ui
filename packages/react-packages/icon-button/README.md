# IconButton

This component allows the user to take action by clicking on an Icon.

## Usage

```jsx
import { IconButton, EditIcon } from '@dt-ui/react';

export const App = () => {
  const handleClick = () => null;

  return (
    <IconButton onClick={handleClick}>
      <EditIcon />
    </IconButton>
  );
};
```

## API

### IconButton

| Property     | Type                | Default   | Description                                       |
| ------------ | ------------------- | --------- | ------------------------------------------------- |
| `children`   | `ReactNode`         | -         | Icon component to be rendered                     |
| `onClick`    | `function`          | -         | The triggered function when clicked on the button |
| `dataTestId` | `string`            | button    | Customizable test identifier                      |
| `isDisabled` | `boolean`           | false     | Determines the disabled state of the button       |
| `variant`    | `IconButtonVariant` | `default` | Determines the variant of the icon                |
| `size`       | `ComponentSize`     | `large`   | Determines the size of the icon                   |
