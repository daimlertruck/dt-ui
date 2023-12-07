import { render } from '@testing-library/react';
import React from 'react';

import { ViewAgendaIcon } from '../../core';
import { withProviders } from '../../utils';

import { Breadcrumb } from './Breadcrumb';

describe('<Breadcrumb /> component', () => {
  const ProvidedBreadcrumb = withProviders(Breadcrumb);

  beforeEach(() => {
    jest.mock('../../hooks/useMedia', () => ({
      useMedia: jest.fn(() => true),
    }));
  });

  it('renders nav element with the correct breadcrumb items', () => {
    const breadcrumbs = [
      { name: 'Name 1', showIcon: true },
      {
        name: 'Second page has a long text to describe its path',
      },
      { disabled: true, name: 'Name 3' },
      {
        name: 'Last page has a long text to describe its path',
      },
    ];

    const { container } = render(
      <ProvidedBreadcrumb separator={'arrow'}>
        {breadcrumbs.map((breadcrumb, i) => (
          <Breadcrumb.Item
            key={`${i}-${breadcrumb.name}`}
            disabled={breadcrumb.disabled}
          >
            {breadcrumb.showIcon && <ViewAgendaIcon />}
            <a href='/'>{breadcrumb.name}</a>
          </Breadcrumb.Item>
        ))}
      </ProvidedBreadcrumb>
    );

    expect(container).toMatchSnapshot();
  });
});
