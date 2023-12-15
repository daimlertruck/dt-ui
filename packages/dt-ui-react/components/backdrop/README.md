# Backdrop

Backdrops can be used when an application is being loaded or when the user opens a modal.

## Usage

```jsx
import { Backdrop } from '@dt-ui/react';

export const App = () => {
  return (
    <Backdrop>
      <div>Children here</div>
    </Backdrop>
  );
};
```

## API

### Backdrop

This component can contain a `ReactNode` as a centrilized child.

| Property     | Type                 | Default  | Description                                           |
| ------------ | -------------------- | -------- | ----------------------------------------------------- |
| `isOpen`     | `boolean`            | false    | Defines if the backdrop is being shown or not         |
| `type`       | `enum<BackdropType>` | dark     | Sets the Backdrop opacity given the available options |
| `children`   | `ReactNode`          | -        | Child components to be rendered                       |
| `dataTestId` | `string`             | backdrop | Backdrop test identifier                              |
