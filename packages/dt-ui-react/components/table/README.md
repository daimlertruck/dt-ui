# Table

Tables display sets of data. They can be fully customized.

## Usage

```jsx
import { Table } from '@dt-ui/react';

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
        <Table.Head>
          <Table.Row>
            {columns.map((column: string) => (
              <Table.ColumnHeader key={`column-header-${column}`}>
                {column}
              </Table.ColumnHeader>
            ))}
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {rows.map((row: string[], i: number) => (
            <Table.Row key={row.toString()}>
              {row.map((content: string, i: number) => (
                <Table.DataCell key={`column-${columns[i]}-${content}`}>
                  {content}
                </Table.DataCell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};
```

## API

### Table

| Property     | Type                  | Default | Description                                                                     |
| ------------ | --------------------- | ------- | ------------------------------------------------------------------------------- |
| `children`   | `ReactNode`           | -       | Child components to be rendered                                                 |
| `isFixed`    | `boolean`             | -       | Define the table layout value. If the value is true, the table-layout is fixed. |
| `dataTestId` | `string`              | -       | Customizable test identifier                                                    |
| `style`      | `React.CSSProperties` | -       | Gives the Table some specific css properties                                    |

### Table.Head

| Property         | Type                  | Default | Description                                                       |
| ---------------- | --------------------- | ------- | ----------------------------------------------------------------- |
| `children`       | `ReactNode`           | -       | Child components to be rendered                                   |
| `hasFixedHeader` | `boolean`             | false   | Define the column headers sticky when scrolling the table content |
| `dataTestId`     | `string`              | -       | Customizable test identifier                                      |
| `style`          | `React.CSSProperties` | -       | Gives the Table.Head some specific css properties                 |

### Table.ColumnHeader

| Property     | Type                  | Default | Description                                               |
| ------------ | --------------------- | ------- | --------------------------------------------------------- |
| `children`   | `ReactNode`           | -       | Child components to be rendered                           |
| `textAlign`  | `TextAlign`           | `left`  | Defines the text align within the column header           |
| `dataTestId` | `string`              | -       | Customizable test identifier                              |
| `style`      | `React.CSSProperties` | -       | Gives the Table.ColumnHeader some specific css properties |

### Table.Body

| Property     | Type                  | Default | Description                                       |
| ------------ | --------------------- | ------- | ------------------------------------------------- |
| `children`   | `ReactNode`           | -       | Child components to be rendered                   |
| `dataTestId` | `string`              | -       | Customizable test identifier                      |
| `style`      | `React.CSSProperties` | -       | Gives the Table.Body some specific css properties |

### Table.Row

| Property     | Type                                             | Default | Description                                      |
| ------------ | ------------------------------------------------ | ------- | ------------------------------------------------ |
| `children`   | `ReactNode`                                      | -       | Child components to be rendered                  |
| `onClick`    | `(event: React.MouseEvent<HTMLElement>) => void` | -       | The triggered function when clicked on the row   |
| `dataTestId` | `string`                                         | -       | Customizable test identifier                     |
| `style`      | `React.CSSProperties`                            | -       | Gives the Table.Row some specific css properties |

### Table.DataCell

| Property      | Type                  | Default | Description                                                                     |
| ------------- | --------------------- | ------- | ------------------------------------------------------------------------------- |
| `children`    | `ReactNode`           | -       | Child components to be rendered                                                 |
| `columnWidth` | `string`              | -       | Sets a fixed width value for the table column, applies only for desktop screens |
| `textAlign`   | `TextAlign`           | `left`  | Defines the text align within the column                                        |
| `dataLabel`   | `string`              | -       | Column name to be shown in the gallery mode (applied in tablet/mobile screens)  |
| `isVisible`   | `boolean`             | `false` | Change the overflow visibility of the cell                                      |
| `dataTestId`  | `string`              | -       | Customizable test identifier                                                    |
| `style`       | `React.CSSProperties` | -       | Gives the Table.Row some specific css properties                                |
