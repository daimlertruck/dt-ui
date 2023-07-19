# Link

A Link will redirect the user somewhere (different page or location in the same page), open the email provider with a default receiver, or download a file.

## Usage

```jsx
import { Link } from '@dt-ui/react';

export const App = () => {
  return <Link href='/'>Some Link</Link>;
};
```

## API

### Link

| Property      | Type               | Default               | Description                                                      |
| ------------- | ------------------ | --------------------- | ---------------------------------------------------------------- |
| `children`    | `ReactNode`        | -                     | Child components to be rendered                                  |
| `dataTestId`  | `string`           | tag                   | Customizable test identifier                                     |
| `onClick`     | `function`         | -                     | The triggered function when the Link is clicked                  |
| `isUnderline` | `boolean`          | true                  | Determines if the text is underlined or not                      |
| `isDisabled`  | `boolean`          | `false`               | Specifies if the element should be disabled                      |
| `textSize`    | `LinkTextSize`     | `LinkTextSize.Medium` | Specifies the text size of the element                           |
| `type`        | `button` \| `text` | `text`                | If set to true, the component inherits the Button css properties |

This component also inherits the native anchor properties. You can know more about this [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a).
