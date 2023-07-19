import { render } from '@testing-library/react';
import React from 'react';

import { withProviders } from '../../utils';

import { Breadcrumb } from './Breadcrumb';

describe('<Breadcrumb /> component', () => {
  const ProvidedBreadcrumb = withProviders(Breadcrumb);

  it('renders nav element with the correct breadcrumb items', () => {
    const breadcrumbs = [
      { active: false, href: '/', name: 'Name 1' },
      { active: true, name: 'Name 2' },
    ];

    const { container } = render(
      <ProvidedBreadcrumb>
        <Breadcrumb.List>
          {breadcrumbs.map((breadcrumb, index) => (
            <Breadcrumb.Item key={`${breadcrumb.name}-${index}`}>
              {breadcrumb.active ? (
                breadcrumb.name
              ) : (
                <Breadcrumb.Anchor href={breadcrumb.href}>
                  {breadcrumb.name}
                </Breadcrumb.Anchor>
              )}
            </Breadcrumb.Item>
          ))}
        </Breadcrumb.List>
      </ProvidedBreadcrumb>
    );

    expect(container).toMatchSnapshot();
  });
});
