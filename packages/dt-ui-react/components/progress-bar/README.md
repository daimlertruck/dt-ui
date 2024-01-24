# Progress Bar

The progress bar component works as a progress indicator to inform users about the status of ongoing processes.

## Usage

```jsx
import { ProgressBar } from '@dt-ui/react';

export const App = () => {
  return (
    <ProgressBar
      label='State of Charge'
      value={55}
      state='error'
      size='small'
    />
  );
};
```

## API

### Progress Bar

| Property     | Type                      | Default  | Description                                                               |
| ------------ | ------------------------- | -------- | ------------------------------------------------------------------------- |
| `value`      | `number`                  | `0`      | Percentage of the progress. Positive integer between 0-100                |
| `state`      | `typeof ProgressBarState` | `active` | Status of the action, could be active, success, or error                  |
| `size`       | `typeof ProgressBarSize`  | `small`  | Determines the size of the progress bar                                   |
| `label`      | `string`                  | -        | A label to describe the progress bar                                      |
| `helperText` | `string`                  | -        | A text to complement the label                                            |
| `info`       | `typeof ProgressBarInfo`  | -`       | Determines which indicator to display, could be none, text, icon, or both |
