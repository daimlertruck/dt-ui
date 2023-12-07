# Alert

An alert displays a short, important message in a way that attracts the user's attention.

## Usage

```jsx
import { Alert, AlertType } from '@dt-ui/react';

export const App = () => {
  return <Alert type={AlertType.Warning}>Some warning message here</Alert>;
};
```

## API

### Alert

| Property     | Type              | Default | Description                                                         |
| ------------ | ----------------- | ------- | ------------------------------------------------------------------- |
| `children`   | `ReactNode`       | -       | Child components to be rendered - the message displayed to the user |
| `type`       | `enum<AlertType>` | -       | Sets the variant of the alert                                       |
| `dataTestId` | `string`          | alert   | Customizable test identifier                                        |
