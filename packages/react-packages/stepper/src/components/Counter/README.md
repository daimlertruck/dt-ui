# Counter

Counters can be used to display a circular element containing number or other content.

## Usage

```jsx
import { Counter } from '@dt-ui/react';

export const App = () => {
  return (
    <div>
      <Counter color='success'>Active</Counter>
    </div>
  );
};
```

## API

### Counter

| Property     | Type        | Default   | Description                                       |
| ------------ | ----------- | --------- | ------------------------------------------------- |
| `children`   | `ReactNode` | -         | Child components to be rendered                   |
| `isLarge`    | `boolean`   | `false`   | Sets larger width and height to Counter component |
| `outlined`   | `boolean`   | `false`   | Determines if the counter is outlined             |
| `dataTestId` | `string`    | `counter` | Customizable test identifier                      |
