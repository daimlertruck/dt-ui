# Tooltip

This component displays information when the user moves the mouse pointer over an trigger element.

## Usage

```jsx
import { TooltipDirection } from './constants';
import { Tooltip } from './Tooltip';

export const App = () => {
  return (
    <Tooltip>
      Hover over me
      <Tooltip.Content direction={TooltipDirection.Top}>
        Some content
      </Tooltip.Content>
    </Tooltip>
  );
};
```

## API

### Tooltip

| Property     | Type                  | Default             | Description                                                 |
| ------------ | --------------------- | ------------------- | ----------------------------------------------------------- |
| `children`   | `ReactNode`           | -                   | Child components to be rendered                             |
| `style`      | `React.CSSProperties` | -                   | Gives the Tooltip containter css properties                 |
| `dataTestId` | `string`              | `tooltip-container` | Customizable test identifier                                |
| `hideDelay`  | `number`              | `0ms`               | Delay to hide tooltip when mouse leaving the target element |

### Tooltip.Content

| Property     | Type                     | Default              | Description                                                                           |
| ------------ | ------------------------ | -------------------- | ------------------------------------------------------------------------------------- |
| `children`   | `ReactNode`              | -                    | Content showed on the Tooltip. When content is empty, the tooltip will not be showed. |
| `direction`  | `enum<TooltipDirection>` | TooltipDirection.Top | Determines the direction of the tooltip                                               |
| `style`      | `React.CSSProperties`    | -                    | Gives the Tooltip Content css properties                                              |
| `dataTestId` | `string`                 | `tooltip-content`    | Customizable test identifier                                                          |
