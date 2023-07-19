import { render } from '@testing-library/react';
import React from 'react';

import { withProviders } from '../../../utils';

import { PageContainer } from './PageContainer';

describe('<PageContainer /> component', () => {
  const ProvidedPageContainer = withProviders(PageContainer);

  it('renders section html element with the correct content', () => {
    const { container } = render(
      <ProvidedPageContainer>
        <div>Page Content</div>
      </ProvidedPageContainer>
    );

    expect(container).toMatchSnapshot();
  });
});
