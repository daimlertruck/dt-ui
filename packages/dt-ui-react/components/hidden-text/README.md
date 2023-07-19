# HiddenText

Hidden text can be used to display a circular element when we want to hide the text and display the text when it is visible

## Usage

```jsx
import { HiddenText } from '@dt-ui/react';

export const App = () => {
  return <HiddenText text='Text to hide' size={10} isVisible={false} />;
};
```

## API

### HiddenText

| Property          | Type      | Default     | Description                                            |
| ----------------- | --------- | ----------- | ------------------------------------------------------ |
| `text`            | `string`  | -           | Text to be shown on the component                      |
| `isVisible`       | `boolean` | false       | Set to true if you want to show the text               |
| `size`            | `number`  | 27          | It is the number of ellipsis when the text is hidden.  |
| `visibleCharSize` | `number`  | 10          | Number of first visible character for the input string |
| `dataTestId`      | `string`  | hidden-text | HiddenText test identifier                             |
