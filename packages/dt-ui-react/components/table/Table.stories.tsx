import { Story } from '@storybook/react';

import { TableVariant } from './constants';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  ColumnHeader,
  DataCell,
} from './Table';

export default {
  title: 'Data Display/Table',
  component: Table,
  argTypes: {
    variant: {
      mapping: TableVariant,
      options: [...Object.values(TableVariant), 'none'].filter(
        (x) => typeof x === 'string'
      ),
      control: { type: 'radio' },
    },
  },
};

// Allows for different data structures
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

const Template: Story = ({ isFixed, variant }) => {
  return (
    <Table isFixed={isFixed} variant={variant}>
      <TableHead variant={variant}>
        <TableRow>
          {columns.map((column: string, i: number) => (
            <ColumnHeader key={i.toString()} variant={variant}>
              {column}
            </ColumnHeader>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row: string[], i: number) => (
          <TableRow key={i.toString()}>
            {row.map((content: string, i: number) => (
              <DataCell key={i.toString()} variant={variant}>
                {content}
              </DataCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export const Default = Template.bind({});

Default.args = {
  variant: TableVariant.Basic,
  isFixed: false,
};
