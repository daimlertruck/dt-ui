# Stepper

Steppers convey progress through steps. These steps can be numbered or not. However, they are sequential.

By default, for screens smaller than our `theme.breakpoints.md` the stepper orientation is always vertical.

## Usage

```jsx
import { Stepper, Step } from '@dt-ui/react';

export const App = () => {
  const options = ['API version definition', 'Specifications', 'Review'];

  const currentStep = 3;
  const completed = [1, 2];

  return (
    <Stepper>
      {options.map((opt, idx) => (
        <Step
          key={option.value}
          isActive={currentStep === idx + 1}
          isCompleted={completed.includes(idx + 1)}
        >
          <Step.Counter>{idx + 1}</Step.Counter>
          <Step.Label>{opt}</Step.Label>
        </Step>
      ))}
    </Stepper>
  );
};
```

## API

### Stepper

| Property      | Type                         | Default         | Description                                                                     |
| ------------- | ---------------------------- | --------------- | ------------------------------------------------------------------------------- |
| `children`    | `ReactNode`                  | -               | Child components to be rendered                                                 |
| `dataTestId`  | `string`                     | default-stepper | Customizable test identifier. This id is concatenated with the -stepper string. |
| `orientation` | `"vertical" \| "horizontal"` | vertical        | To specify the direction of the step bar.                                       |
