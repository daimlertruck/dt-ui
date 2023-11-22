import { Story } from '@storybook/react';

import { Colors } from '../../types';
import { Avatar, AvatarType } from '../avatar';
import { Pill } from '../pill';

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
};

const columns = ['Name', 'Email', 'Role', 'Status'];

const rows = [
  [
    'Thomas Morse',
    'thomas.morse@myhugecompanynamem.com',
    'Operator',
    'warning',
  ],
  ['Hanna Apple', 'hanna.apple@companysample.com', 'Admin', 'success'],
  ['Marcus Klein', 'marcus.klein@companysample.com', 'Operator', 'success'],
  ['Rick Thor', 'rick.thor@companysample.com', 'Admin', 'neutralLight_100'],
];

const columnSizes: { [key: string]: string } = {
  Name: '200px',
  Status: '120px',
};

const renderAvatarWithTitle = (title: string) => (
  <div style={{ display: 'flex' }}>
    <Avatar title={title} type={AvatarType.TeamMember}></Avatar>
    {title}
  </div>
);

const renderPill = (content: string) => (
  <Pill color={content as Colors}>
    {
      {
        success: 'ACTIVE',
        warning: 'PENDING',
        neutralLight_100: 'DEACTIVATED',
      }[content]
    }
  </Pill>
);

const renderContent = (colIndex: number, content: string) => {
  return {
    Name: renderAvatarWithTitle(content),
    Status: renderPill(content),
    Email: content,
    Role: content,
  }[columns[colIndex]];
};

const Template: Story = ({ isFixed }) => {
  return (
    <Table isFixed={isFixed}>
      <TableHead>
        <TableRow>
          {columns.map((column: string) => (
            <ColumnHeader key={`column-header-${column}`}>
              {column}
            </ColumnHeader>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row: string[]) => (
          <TableRow key={row.toString()}>
            {row.map((content: string, i: number) => (
              <DataCell
                dataLabel={columns[i]}
                key={`column-${columns[i]}-${content}`}
                columnWidth={columnSizes[columns[i]]}
              >
                {renderContent(i, content)}
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
  isFixed: false,
};
