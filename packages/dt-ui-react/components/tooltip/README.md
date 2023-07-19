# Tooltip

This component displays information when the user moves the mouse pointer over an element.

## Usage

```jsx
import { useState } from 'react';

import { TooltipDirection } from './constants';
import { Tooltip } from './Tooltip';

export const App = () => {
  return (
    <Tooltip
      content='Tooltip will appear below the element'
      direction={TooltipDirection.Bottom}
    >
      Hover over me
    </Tooltip>
  );
};
```

## API

### Tooltip

Component that after hover will open the tooltip's content.

| Property         | Type                     | Default              | Description                                                                                                        |
| ---------------- | ------------------------ | -------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `children`       | `ReactNode`              | -                    | Component that after hovered will open the Tooltip                                                                 |
| `content`        | `ReactNode`              | -                    | Text showed on the Tooltip. When string is empty, the tooltip will not be showed.                                  |
| `direction`      | `enum<TooltipDirection>` | TooltipDirection.Top | Determines the direction of the tooltip (e.g. TooltipDirection.Bottom means the tooltip is below the main element) |
| `style`          | `React.CSSProperties`    | -                    | Customizable styles applied to the tooltip                                                                         |
| `styleContainer` | `React.CSSProperties`    | -                    | Customizable styles applied to the container                                                                       |
