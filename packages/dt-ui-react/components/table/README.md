# Table

Tables display sets of data. They can be fully customized.

## Usage

```jsx
import {
  ColumnHeader,
  DataCell,
  Table,
  TableBody,
  TableHead,
  TableRow,
} from '@dt-ui/react';

export const App = () => {
  const columns = ['Column 1', 'Column 2', 'Column 3', 'Column 4'];

  const rows = [
    [
      'Row 1 - content 1',
      'Row 1 - content 2',
      'Row 1 - content 3',
      'Row 1 - Some more content 4',
    ],
    [
      'Row 2 - content 1',
      'Row 2 - content 2',
      'Row 2 - content 3',
      'Row 2 - content 4',
    ],
    [
      'Row 3 - content 1',
      'Row 3 - content 2',
      'Row 3 - content 3',
      'Row 3 - content 4',
    ],
  ];

  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column: string, i: number) => (
              <ColumnHeader key={i.toString()}>{column}</ColumnHeader>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: string[], i: number) => (
            <TableRow key={i.toString()}>
              {row.map((content: string, i: number) => (
                <DataCell key={i.toString()}>{content}</DataCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
```

## API

### Table

| Property     | Type        | Default | Description                                                                     |
| ------------ | ----------- | ------- | ------------------------------------------------------------------------------- |
| `children`   | `ReactNode` | -       | Child components to be rendered                                                 |
| `isFixed`    | `boolean`   | -       | Define the table layout value. If the value is true, the table-layout is fixed. |
| `dataTestId` | `string`    | -       | Customizable test identifier                                                    |

### TableHead

| Property   | Type        | Default | Description                     |
| ---------- | ----------- | ------- | ------------------------------- |
| `children` | `ReactNode` | -       | Child components to be rendered |

### ColumnHeader

| Property   | Type        | Default | Description                     |
| ---------- | ----------- | ------- | ------------------------------- |
| `children` | `ReactNode` | -       | Child components to be rendered |

### TableBody

| Property   | Type        | Default | Description                     |
| ---------- | ----------- | ------- | ------------------------------- |
| `children` | `ReactNode` | -       | Child components to be rendered |

### TableRow

| Property   | Type                                             | Default | Description                                    |
| ---------- | ------------------------------------------------ | ------- | ---------------------------------------------- |
| `children` | `ReactNode`                                      | -       | Child components to be rendered                |
| `onClick`  | `(event: React.MouseEvent<HTMLElement>) => void` | -       | The triggered function when clicked on the row |

### DataCell

| Property     | Type        | Default  | Description                                   |
| ------------ | ----------- | -------- | ----------------------------------------------|
| `children`   | `ReactNode` | -        | Child components to be rendered               |
| `columnSize` | `string`    | -        | Sets a fixed width value for the table column |
