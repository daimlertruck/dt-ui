# Spinner

The spinner component works as a progress indicator to inform users about the status of ongoing processes.

## Usage

```jsx
import { Spinner } from '@dt-ui/react';

export const App = () => {
  return <Spinner size='small' spinnerTheme='light' />;
};
```

## API

### Spinner

| Property       | Type                  | Default | Description                                                                                                                                                                                                                              |
| -------------- | --------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `size`         | `typeof Size`         | `large` | Determines the size of the spinner                                                                                                                                                                                                       |
| `spinnerTheme` | `typeof SpinnerTheme` | `dark`  | Determines the color contrast of the spinner. Dark contrast means the spinner is placed on top of darker colors (e.g. primary button), and light contrast means the spinner is placed on top of ligher color (e.g. main page background) |
