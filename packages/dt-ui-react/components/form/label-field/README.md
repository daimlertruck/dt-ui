# LabelField

The `<label>` represents a caption for an item in a user interface.

## Usage

```jsx
import { LabelField } from '@dt-ui/react';

export const App = () => {
  const INPUT_ID = 'input-id';
  return (
    <>
      <LabelField forId={INPUT_ID} label='My Awesome Input' isActive={true} />
      <input id={INPUT_ID} />
    </>
  );
};
```

## API

### LabelField

The component that displays the caption for the user.

| Property     | Type        | Default     | Description                                                                                                                           |
| ------------ | ----------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `children`   | `ReactNode` | -           | Child components to be rendered                                                                                                       |
| `forId`      | `string`    | -           | It refers to the input control that this label is for. Its value must be the same as the value of the input control’s “id” attribute. |
| `isActive`   | `boolean`   | false       | Apply styles to change the label behaviour                                                                                            |
| `isDisabled` | `boolean`   | false       | Apply different styles based on this value                                                                                            |
| `dataTestId` | `string`    | label-field | Textarea test identifier                                                                                                              |
