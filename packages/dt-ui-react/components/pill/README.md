# Pill

Pills can be used to display states (Active, Inactive) in lists, tables, etc.

## Usage

```jsx
import { Pill } from '@dt-ui/react';

export const App = () => {
  return (
    <div>
      <Pill color='success'>Active</Pill>
    </div>
  );
};
```

## API

### Pill

| Property     | Type        | Default | Description                        |
| ------------ | ----------- | ------- | ---------------------------------- |
| `children`   | `ReactNode` | -       | Child components to be rendered    |
| `color`      | `string`    | success | You can set the state of the Label |
| `dataTestId` | `string`    | pill    | Customizable test identifier       |
