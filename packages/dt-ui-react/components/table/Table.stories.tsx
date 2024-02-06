import { Avatar, AvatarSize, AvatarType } from '@dt-ui/react-avatar';
import { Story } from '@storybook/react';

import { Tag } from '../tag';
import { TagColor } from '../tag/constants';

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
  ['Thomas Morse', 'thomas.morse@myhugecompanynamem.com', 'Operator', 'yellow'],
  ['Hanna Apple', 'hanna.apple@companysample.com', 'Admin', 'green'],
  ['Marcus Klein', 'marcus.klein@companysample.com', 'Operator', 'green'],
  ['Rick Thor', 'rick.thor@companysample.com', 'Admin', 'grey'],
];

const columnSizes: { [key: string]: string } = {
  Name: '200px',
  Status: '120px',
};

const renderAvatarWithTitle = (title: string) => (
  <div style={{ display: 'flex' }}>
    <Avatar size={AvatarSize.Small} title={title} type={AvatarType.Primary} />
    {title}
  </div>
);

const renderTag = (content: string) => (
  <Tag border='rounded' color={content as TagColor} size='small'>
    {
      {
        green: 'ACTIVE',
        yellow: 'PENDING',
        grey: 'DEACTIVATED',
      }[content]
    }
  </Tag>
);

const renderContent = (colIndex: number, content: string) => {
  return {
    Name: renderAvatarWithTitle(content),
    Status: renderTag(content),
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
                columnWidth={columnSizes[columns[i]]}
                dataLabel={columns[i]}
                key={`column-${columns[i]}-${content}`}
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

const StickyHeaderTemplate: Story = ({ isFixed, hasFixedHeader }) => {
  return (
    <div style={{ height: '200px', overflow: 'auto' }}>
      <Table isFixed={isFixed}>
        <TableHead hasFixedHeader={hasFixedHeader}>
          <TableRow>
            {columns.map((column: string) => (
              <ColumnHeader key={`column-header-${column}`}>
                {column}
              </ColumnHeader>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {[...rows, ...rows].map((row: string[]) => (
            <TableRow key={row.toString()}>
              {row.map((content: string, i: number) => (
                <DataCell
                  columnWidth={columnSizes[columns[i]]}
                  dataLabel={columns[i]}
                  key={`column-${columns[i]}-${content}`}
                >
                  {renderContent(i, content)}
                </DataCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export const StickyHeaderExample = StickyHeaderTemplate.bind({});

StickyHeaderExample.args = {
  isFixed: true,
  hasFixedHeader: true,
};
