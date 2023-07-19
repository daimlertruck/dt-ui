# Card

This component contains content and actions about a single subject.

## Usage

```jsx
import { Card } from '@dt-ui/react';

export const App = () => {
  return (
    <Card>
      <Card.Title>Some Title</Card.Title>
      <Card.Detail>Some Description</Card.Detail>
    </Card>
  );
};
```

## API

### Card

| Property   | Type        | Default | Description                     |
| ---------- | ----------- | ------- | ------------------------------- |
| `children` | `ReactNode` | -       | Child components to be rendered |

### Card.Title

| Property   | Type        | Default | Description                     |
| ---------- | ----------- | ------- | ------------------------------- |
| `children` | `ReactNode` | -       | Child components to be rendered |

### Card.Detail

| Property   | Type        | Default | Description                     |
| ---------- | ----------- | ------- | ------------------------------- |
| `children` | `ReactNode` | -       | Child components to be rendered |
