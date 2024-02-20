import { Provider, theme } from '@dt-ui/react-core';
import { render, screen, within } from '@testing-library/react';
import '@emotion/jest';

import { default as Table } from './Table';

describe('<Table /> component', () => {
  const COLUMNS = ['Column 1', 'Column 2', 'Column 3', 'Column 4'];
  const ROWS = [
    [
      'Row 1 - content 1',
      'Row 1 - content 2',
      'Row 1 - content 3',
      'Row 1 - content 4',
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

  it('renders a Composable Table with a custom data structure', () => {
    render(
      <Provider theme={theme}>
        <Table>
          <Table.Head>
            <Table.Row>
              {COLUMNS.map((column: string) => (
                <Table.ColumnHeader key={`column-index-${column}`}>
                  {column}
                </Table.ColumnHeader>
              ))}
            </Table.Row>
          </Table.Head>
          <Table.Body>
            {ROWS.map((row: string[], rowIndex: number) => (
              <Table.Row key={`row-index-${row}`}>
                {row.map((content: string) => (
                  <Table.DataCell
                    dataLabel={COLUMNS[rowIndex]}
                    key={`data-cell-index-${content}`}
                  >
                    {content}
                  </Table.DataCell>
                ))}
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Provider>
    );

    // Test head columns are rendered
    COLUMNS.forEach((column: string) => {
      const cell = screen.getByText(column).closest('th');
      const utils = within(cell!);

      expect(utils.getByText(column)).toBeInTheDocument();
    });

    // Test rows content are in rendered
    ROWS.forEach((row: string[]) => {
      row.forEach((cell: string) => {
        const dataCell = screen.getByText(cell).closest('td');
        const utils = within(dataCell!);

        expect(utils.getByText(cell)).toBeInTheDocument();
      });
    });
  });

  it('renders a Basic Table', () => {
    const { container } = render(
      <Provider theme={theme}>
        <Table>
          <Table.Head>
            <Table.Row>
              {COLUMNS.map((column: string) => (
                <Table.ColumnHeader key={`column-header-${column}`}>
                  {column}
                </Table.ColumnHeader>
              ))}
            </Table.Row>
          </Table.Head>
          <Table.Body>
            {ROWS.map((row: string[]) => (
              <Table.Row key={row.toString()}>
                {row.map((content: string, i: number) => (
                  <Table.DataCell
                    dataLabel={COLUMNS[i]}
                    key={`column-${COLUMNS[i]}-${content}`}
                  >
                    {content}
                  </Table.DataCell>
                ))}
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });

  it('applies the expected styles when Table has Fixed Header', () => {
    render(
      <Provider theme={theme}>
        <Table.Head hasFixedHeader>
          <Table.Row>
            {COLUMNS.map((column: string) => (
              <Table.ColumnHeader key={`column-header-${column}`}>
                {column}
              </Table.ColumnHeader>
            ))}
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {ROWS.map((row: string[]) => (
            <Table.Row key={row.toString()}>
              {row.map((content: string, i: number) => (
                <Table.DataCell
                  dataLabel={COLUMNS[i]}
                  key={`column-${COLUMNS[i]}-${content}`}
                >
                  {content}
                </Table.DataCell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Provider>
    );

    const theadElement = screen.getByText('Column 1').closest('thead');

    expect(theadElement).toHaveStyleRule('position', 'sticky', {
      media: `(min-width: ${theme.breakpoints.m})`,
    });
  });
});
