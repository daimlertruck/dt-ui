import { Story } from '@storybook/react';

import { ViewAgendaIcon } from '../../core';

import { Breadcrumb, BreadcrumbProps } from './Breadcrumb';

export default {
  title: 'Data Display/Breadcrumb',
  component: Breadcrumb,
};

const Template: Story<BreadcrumbProps> = ({ separator }) => {
  const breadcrumbs = [
    { name: 'Name 1', showIcon: true },
    {
      name: 'Second page has a long text to describe its path',
    },
    { name: 'Name 3' },
    {
      name: 'Last page has a long text to describe its path',
    },
  ];

  return (
    <Breadcrumb separator={separator}>
      {breadcrumbs.map((breadcrumb, i) => (
        <Breadcrumb.Item key={`${i}-${breadcrumb.name}`}>
          {breadcrumb.showIcon && <ViewAgendaIcon />}
          <a href='/'>{breadcrumb.name}</a>
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export const Default = Template.bind({});

Default.args = {
  separator: 'slash',
};
