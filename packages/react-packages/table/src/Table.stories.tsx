import { Avatar, AvatarSize, AvatarType } from '@dt-ui/react-avatar';
import { Tag, TagColor } from '@dt-ui/react-tag';
import { Tooltip } from '@dt-ui/react-tooltip';
import { Meta, StoryObj } from '@storybook/react';

import { InfoOutlineIcon } from '../../../dt-ui-react/core';

import { TableHeadProps } from './components';
import { default as Table, TableProps } from './Table';

const columns = [
  'Name',
  'Email',
  'Role',
  'Status',
  'Phone',
  'Department',
  'Location',
  'Manager',
];

const rows = [
  [
    'John Doe',
    'john@example.com',
    'Developer',
    'green',
    '+123456789',
    'Engineering',
    'New York',
    'Alice',
  ],
  [
    'Jane Smith',
    'jane@example.com',
    'Designer',
    'grey',
    '+987654321',
    'Design',
    'San Francisco',
    'Bob',
  ],
  [
    'Alice Johnson',
    'alice@example.com',
    'Manager',
    'yellow',
    '+135792468',
    'Management',
    'Los Angeles',
    'Charlie',
  ],
  [
    'Bob Brown',
    'bob@example.com',
    'Engineer',
    'green',
    '+246813579',
    'Engineering',
    'Chicago',
    'David',
  ],
];

const columnSizes: { [key: string]: string } = {
  Name: '200px',
  Status: '120px',
};

const renderAvatarWithTitle = (title: string) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
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
  const columnName = columns[colIndex];
  if (columnName !== 'Name' && columnName !== 'Status') {
    return content;
  }

  return {
    Name: renderAvatarWithTitle(content),
    Status: renderTag(content),
  }[columnName];
};

const meta: Meta<TableProps & TableHeadProps> = {
  title: 'Data Display/Table',
  component: Table,
  render: ({ isFixed, hasFixedHeader }) => (
    <div
      style={{ ...(hasFixedHeader && { height: '200px', overflow: 'auto' }) }}
    >
      <Table isFixed={isFixed}>
        <Table.Head hasFixedHeader={hasFixedHeader}>
          <Table.Row>
            {columns.map((column: string) => (
              <Table.ColumnHeader
                dataTestId='test'
                key={`column-header-${column}`}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  {column}
                  {column === 'Status' && (
                    <Tooltip>
                      <InfoOutlineIcon height={16} width={16} />
                      <Tooltip.Content>
                        Pending: Yellow | Active: Green | Deactivated: Grey
                      </Tooltip.Content>
                    </Tooltip>
                  )}
                </div>
              </Table.ColumnHeader>
            ))}
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {rows.map((row: string[]) => (
            <Table.Row key={row.toString()}>
              {row.map((content: string, i: number) => (
                <Table.DataCell
                  columnWidth={columnSizes[columns[i]]}
                  key={`column-${columns[i]}-${content}`}
                >
                  {renderContent(i, content)}
                </Table.DataCell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  ),
};

export const Default: StoryObj<TableProps & TableHeadProps> = {
  args: {
    isFixed: false,
    hasFixedHeader: false,
  },
};

export default meta;
const fixedColumnCount = 1;
const fixedEndColumnCount = 2;

export const TableWithPinnedColumns: Meta<TableProps & TableHeadProps> = {
  title: 'Table',
  component: Table,
  render: () => (
    <div style={{ width: '500px', overflow: 'auto' }}>
      <Table
        fixedColumnCount={fixedColumnCount}
        fixedEndColumnCount={fixedEndColumnCount}
      >
        <Table.Head>
          <Table.Row>
            {columns.map((column: string) => (
              <Table.ColumnHeader
                dataTestId='test'
                key={`column-header-${column}`}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  {column}
                  {column === 'Status' && (
                    <Tooltip>
                      <InfoOutlineIcon height={16} width={16} />
                      <Tooltip.Content>
                        Pending: Yellow | Active: Green | Deactivated: Grey
                      </Tooltip.Content>
                    </Tooltip>
                  )}
                </div>
              </Table.ColumnHeader>
            ))}
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {rows.map((row: string[]) => (
            <Table.Row key={row.toString()}>
              {row.map((content: string, i: number) => (
                <Table.DataCell
                  columnWidth={columnSizes[columns[i]]}
                  key={`column-${columns[i]}-${content}`}
                >
                  {renderContent(i, content)}
                </Table.DataCell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  ),
};
