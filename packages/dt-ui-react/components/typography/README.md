# Typography

## Usage

```jsx
import { Typography } from '@dt-ui/react';

const App = () => {
  return (
    <Typography element='h1' fontStyles='h1' color='gray_200'>
      Some text
    </Typography>
  );
};
```

## API

### Typography

| Property     | Type                                                                                 | Default    | Description                                                                |
| ------------ | ------------------------------------------------------------------------------------ | ---------- | -------------------------------------------------------------------------- |
| `children`   | `ReactNode`                                                                          | -          | Child components to be rendered                                            |
| `element`    | `Elements`                                                                           | p          | You can set the element tag                                                |
| `color`      | `keyof Theme['colors']` \| `keyof Theme['palette']['alpha']` \| 'unset' \| 'inherit' | `gray_300` | You can set the color of the element                                       |
| `fontStyles` | `keyof Theme['fontStyles']['alpha'];`                                                | -          | You can set the font style (weight, line height, font size) of the element |
| `dataTestId` | `string`                                                                             | typography | Customizable test identifier                                               |
| `style`      | `React.CSSProperties`                                                                | -          | Customizable styles                                                        |
| `ref`        | `RefObject`                                                                          | -          | Provides a way to access DOM node or React element reference.              |
