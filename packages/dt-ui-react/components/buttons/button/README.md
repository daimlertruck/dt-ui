# Button

This component allows the user to take action, by clicking on it.

## Usage

```jsx
import { Button } from '@dt-ui/react';

export const App = () => {
  const handleClick = () => null; //Some action here

  return <Button onClick={handleClick}>Click me</Button>;
};
```

## API

### Button

#### Props

| Property     | Type                               | Default | Description                                                                                                                                                              |
| ------------ | ---------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `children`   | `ReactNode`                        | -       | Child components to be rendered                                                                                                                                          |
| `onClick`    | `function`                         | -       | The triggered function when clicked on the button                                                                                                                        |
| `dataTestId` | `string`                           | button  | Customizable test identifier                                                                                                                                             |
| `isDisabled` | `boolean`                          | false   | Determines the disabled state of the button                                                                                                                              |
| `variant`    | `'solid' \| 'outlined' \| 'text'`  | solid   | Determines the variant of the button. `Solid` button are for high-emphasys actions. `outlined` represent medium-emphasys actions. `text` represent low-emphasys actions. |
| `color`      | `'primary' \| 'error \| 'neutral'` | primary | Determines the color of the button. It is dependent on the variant.                                                                                                      |
| `style`      | `React.CSSProperties`              | -       | Gives the button some specific css properties                                                                                                                            |
| `isLoading`  | `boolean`                          | -       | If set to true, the button is disabled and a spinner is showed next to the label                                                                                         |

#### Variant and Colors

As mentioned in the props table, the colors are dependent on the variant. Here is the list of available colors for each available variant:

| Color\Variant | Solid | Outlined | Text |
| ------------- | ----- | -------- | ---- |
| `primary`     | yes   | -        | yes  |
| `neutral`     | -     | yes      | -    |
| `error`       | yes   | -        | -    |
