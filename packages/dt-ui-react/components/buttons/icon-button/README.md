# IconButton

This component allows the user to take action by clicking on an Icon.

## Usage

```jsx
import { IconButton, EditIcon } from '@dt-ui/react';

export const App = () => {
  const handleClick = () => null; //Some action here

  return (
    <IconButton onClick={handleClick} color='primary'>
      <EditIcon />
    </IconButton>
  );
};
```

## API

### IconButton

| Property       | Type                                             | Default   | Description                                                       |
| -------------- | ------------------------------------------------ | --------- | ----------------------------------------------------------------- |
| `children`     | `ReactNode`                                      | -         | Icon component to be rendered                                     |
| `onClick`      | `function`                                       | -         | The triggered function when clicked on the button                 |
| `dataTestId`   | `string`                                         | button    | Customizable test identifier                                      |
| `isDisabled`   | `boolean`                                        | false     | Determines the disabled state of the button                       |
| `color`        | `string`                                         | `primary` | Determines the hover color of the icon                            |
| `onMouseOver`  | `(event: React.MouseEvent<HTMLElement>) => void` | -         | The triggered function when the mouse overs the button            |
| `onMouseEnter` | `(event: React.MouseEvent<HTMLElement>) => void` | -         | Trigger function when mouse enters the boundary of button element |

Note: the main color of the icon should be defined directly on it (e.g. `<EditIcon color='red' />`)
