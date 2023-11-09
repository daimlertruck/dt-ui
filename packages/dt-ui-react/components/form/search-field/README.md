# SearchField

A search field allows a user to type a word or phrase to filter a large amount of data down to a known piece of content or to a narrower list of relevant content.

## Usage

```jsx
import { ChangeEvent, useState } from 'react';
import { SearchField } from '@dt-ui/react';

const MyComponent = () => {
  const [value, setValue] = useState('');

  const handleSearchField = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  // After 1000ms(Default value), the handleSearchField it'll trigger to set the new value. Then you can use it to make a request.

  return (
    <div>
      <SearchField label='Search ...' onChange={handleSearchField} />
    </div>
  );
};
```

## API

### SearchField

| Property       | Type       | Default | Description                                                   |
| -------------- | :--------- | :------ | :------------------------------------------------------------ |
| `label`        | `string`   | -       | A label to help users understand the scope of the search.     |
| `onChange`     | `function` | -       | The triggered function after <delay>ms when the input change. |
| `onClick`      | `function` | -       | The triggered function when clicked on the search icon.       |
| `delay`        | `number`   | 1000ms  | The wait time for execute the onChange function               |
| `isLoading`    | `boolean`  | -       | If set to true, the search icon is replaced by the spinner    |
| `initialValue` | `string`   | -       | Sets the initial value of the search field.                   |
