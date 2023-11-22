# Spinner

The spinner component works as a progress indicator to inform users about the status of ongoing processes.

## Usage

```jsx
import { Spinner } from '@dt-ui/react';

export const App = () => {
  return <Spinner size='small' colorScheme='negative' loadingText='Loading...' />;
};
```

## API

### Spinner

| Property        | Type                        | Default    | Description                                                                                                                                                                                        |
|-----------------|-----------------------------|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `size`          | `typeof SpinnerSize`        | `medium`   | Determines the size of the spinner                                                                                                                                                                 |
| `colorScheme`   | `typeof SpinnerColorScheme` | `positive` | Determines the color contrast of the spinner. Positive contrast means the spinner is placed on top of lighter colors, and negative contrast means the spinner is placed on top of darker colors    |
| `withText`      | `boolean`                   | `false`    | Determines if the loading indicator will have a `Loading...` helper text below the spinner                                                                                                         | 
