# Box

The Box component serves as a wrapper component for most of the CSS utility needs.

## Usage

```jsx
import { Box } from '@dt-ui/react';

export const App = () => {
  return (
    <Box element='div' style={{ gap: '10px' }}>
      <p>Content 1</p>
      <p>Content 2</p>
    </Box>
  );
};
```

## API

### Box

| Property     | Type                  | Default | Description                           |
| ------------ | --------------------- | ------- | ------------------------------------- |
| `children`   | `ReactNode`           | -       | Child components to be rendered       |
| `element`    | `React.ElementType`   | `div`   | HTML element to be rendered as parent |
| `dataTestId` | `string`              | -       | Customizable test identifier          |
| `style`      | `React.CSSProperties` | -       | Gives the Box specific css properties |
