import { theme, withProviders } from '@dt-ui/react-core';
import { render, screen, within, waitFor } from '@testing-library/react';
import '@emotion/jest';

import { TableHeadProps, TableDataCellProps } from './components';
import { default as Table, TableProps } from './Table';

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

const ProvidedTable = withProviders(Table);

const renderTableWithProps = (
  {
    isFixed,
    hasFixedHeader,
    textAlign,
    columnWidth,
  }: TableProps & TableHeadProps & TableDataCellProps = {
    isFixed: false,
    hasFixedHeader: false,
    textAlign: 'left',
    columnWidth: '',
  }
) => {
  return render(
    <ProvidedTable isFixed={isFixed}>
      <Table.Head hasFixedHeader={hasFixedHeader}>
        <Table.Row>
          {COLUMNS.map((column: string) => (
            <Table.ColumnHeader
              key={`column-header-${column}`}
              textAlign={textAlign}
            >
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
                columnWidth={columnWidth}
                key={`column-${COLUMNS[i]}-${content}`}
                textAlign={textAlign}
              >
                {content}
              </Table.DataCell>
            ))}
          </Table.Row>
        ))}
      </Table.Body>
    </ProvidedTable>
  );
};

describe('<Table /> component', () => {
  it('renders a Basic Table', () => {
    const { container } = renderTableWithProps();

    expect(container).toMatchSnapshot();
  });

  it('renders a Composable Table with a custom data structure', () => {
    renderTableWithProps();

    // Test head columns are rendered
    COLUMNS.forEach((column: string) => {
      const cell = within(screen.getByTestId('table-head'))
        .getByText(column)
        .closest('th');

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

  it('applies the expected styles when Table has Fixed Header', () => {
    renderTableWithProps({ hasFixedHeader: true });

    const theadElement = screen.getByTestId('table-head');

    expect(theadElement).toHaveStyleRule('position', 'sticky', {
      media: `(min-width: ${theme.breakpoints.m})`,
    });
  });

  it('applies custom column Width to table data cell', () => {
    renderTableWithProps({ columnWidth: '20px' });

    const tdElements = screen.getAllByTestId('table-data-cell');

    tdElements.map(async (e) => {
      await waitFor(() => expect(e).toHaveStyleRule('max-width', '20px'));
    });
  });

  it('applies the expected styles when Table has text aligned center', () => {
    renderTableWithProps({ textAlign: 'center' });

    const thElements = screen.getAllByTestId('table-column-header');
    const tdElements = screen.getAllByTestId('table-data-cell');

    expect(thElements).toHaveLength(4);
    thElements.map((e) => {
      expect(e).toHaveStyleRule('text-align', 'center');
    });

    tdElements.map((e) => {
      expect(e).toHaveStyleRule('text-align', 'center');
    });
  });

  it('should append headers on data cells to be shown on mobile version', () => {
    renderTableWithProps();

    ROWS.forEach((rowData: string[]) => {
      rowData.forEach((data, columnIndex) => {
        const dataCell = screen.getByText(data).closest('td');
        const dataCellContent = within(dataCell!);
        const headerInDataCell = dataCellContent.getByText(
          COLUMNS[columnIndex],
          {
            selector: '.header-cell',
          }
        );

        expect(headerInDataCell).toBeInTheDocument();

        expect(headerInDataCell).toHaveStyleRule('display', 'none', {
          media: `(min-width: ${theme.breakpoints.m})`,
        });
      });
    });
  });
});
