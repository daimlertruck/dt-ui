# Step

A single step in the step bar.

## Usage

```jsx
import { Stepper, Step } from '@dt-dds/react';

export const App = () => {
  const options = ['API version definition', 'Specifications', 'Review'];

  const currentStep = 3;
  const completed = [1, 2];

  return (
    <Stepper>
      {options.map((opt, idx) => (
        <Step
          key={opt}
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

### Step

The step item wrapper.

| Property      | Type        | Default | Description                                                |
| ------------- | ----------- | ------- | ---------------------------------------------------------- |
| `children`    | `ReactNode` | -       | Child components to be rendered                            |
| `isActive`    | `boolean`   | false   | Sets the step as active. Is passed to child components     |
| `isCompleted` | `boolean`   | false   | Mark the step as completed. Is passed to child components. |
| `isDisabled`  | `boolean`   | false   | Mark the step as disabled. Is passed to child components.  |
| `isError`     | `boolean`   | false   | Mark the step as error. Is passed to child components.     |

### Step.Counter

The step counter item.

| Property      | Type        | Default | Description                     |
| ------------- | ----------- | ------- | ------------------------------- |
| `children`    | `ReactNode` | -       | Child components to be rendered |
| `isActive`    | `boolean`   | false   | Sets the step as active.        |
| `isCompleted` | `boolean`   | false   | Mark the step as completed.     |
| `isDisabled`  | `boolean`   | false   | Mark the step as disabled.      |
| `isError`     | `boolean`   | false   | Mark the step as error.         |

### Step.Label

The step item label.

| Property      | Type        | Default | Description                     |
| ------------- | ----------- | ------- | ------------------------------- |
| `children`    | `ReactNode` | -       | Child components to be rendered |
| `isActive`    | `boolean`   | false   | Sets the step as active.        |
| `isCompleted` | `boolean`   | false   | Mark the step as completed.     |
| `isDisabled`  | `boolean`   | false   | Mark the step as disabled.      |
| `isError`     | `boolean`   | false   | Mark the step as error.         |
