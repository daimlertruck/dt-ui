import { render, screen, within } from '@testing-library/react';
import React from 'react';

import { theme } from '../../themes/default';
import { Provider } from '../Provider';

import { TableVariant } from './constants';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  ColumnHeader,
  DataCell,
} from './Table';

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
          <TableHead>
            <TableRow>
              {COLUMNS.map((column: string, i: number) => (
                <ColumnHeader key={i.toString()}>{column}</ColumnHeader>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {ROWS.map((row: string[], i: number) => (
              <TableRow key={i.toString()}>
                {row.map((content: string, i: number) => (
                  <DataCell key={i.toString()}>{content}</DataCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Provider>
    );

    // Test head columns are endered
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
        <Table variant={TableVariant.Basic}>
          <TableHead variant={TableVariant.Basic}>
            <TableRow>
              {COLUMNS.map((column: string, i: number) => (
                <ColumnHeader key={i.toString()} variant={TableVariant.Basic}>
                  {column}
                </ColumnHeader>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {ROWS.map((row: string[], i: number) => (
              <TableRow key={i.toString()}>
                {row.map((content: string, i: number) => (
                  <DataCell key={i.toString()} variant={TableVariant.Basic}>
                    {content}
                  </DataCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
