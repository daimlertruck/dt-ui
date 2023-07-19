# Pagination

The Pagination component enables the user to select a specific page from a range of pages.

## Usage

```jsx
import { Pagination, PaginationInput, usePagination } from '@dt-ui/react';
const totalPages = 10;

const { currentPage, handleChange, handleUserInput } = usePagination();

return (
  <Pagination>
    <Pagination.PreviousItem
      disabled={currentPage <= 1 || currentPage > totalPages}
      onClick={() => handleChange(currentPage - 1)}
    />
    <PaginationInput
      value={currentPage}
      totalPages={totalPages}
      onHandleKeyDown={handleUserInput}
      onChange={handleChange}
    />
    <Pagination.Content
      totalPages={totalPages}
      onClick={() => handleChange(totalPages)}
    />
    <Pagination.NextItem
      disabled={currentPage >= totalPages || currentPage < 1}
      onClick={() => handleChange(currentPage + 1)}
    />
  </Pagination>
);
```

## API

### Pagination

Main Pagination container.

| Property     | Type        | Default            | Description                     |
| ------------ | ----------- | ------------------ | ------------------------------- |
| `children`   | `ReactNode` | -                  | Child components to be rendered |
| `dataTestId` | `string`    | pagination-wrapper | Customizable test identifier    |

### Pagination.PreviousItem

| Property   | Type       | Default | Description                                       |
| ---------- | ---------- | ------- | ------------------------------------------------- |
| `onClick`  | `function` | -       | The triggered function when clicked on the button |
| `disabled` | `boolean`  | false   | Determines the disabled state of the button       |

### Pagination.NextItem

| Property   | Type       | Default | Description                                       |
| ---------- | ---------- | ------- | ------------------------------------------------- |
| `onClick`  | `function` | -       | The triggered function when clicked on the button |
| `disabled` | `boolean`  | false   | Determines the disabled state of the button       |

### Pagination.Content

| Property     | Type       | Default | Description                                       |
| ------------ | ---------- | ------- | ------------------------------------------------- |
| `onClick`    | `function` | -       | The triggered function when clicked on the button |
| `totalPages` | `number`   | -       | It will be the number displayed on the button     |

### PaginationInput

| Property          | Type       | Default | Description                                          |
| ----------------- | ---------- | ------- | ---------------------------------------------------- |
| `totalPages`      | `number`   | -       | Total number of pages                                |
| `onChange`        | `function` | -       | Function to be executed when debounced value changes |
| `onHandleKeyDown` | `function` | -       | Event fired when a key is pressed                    |
| `value`           | `number`   | -       | Value to be displayed on the input                   |
