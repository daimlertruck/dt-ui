import { withProviders } from '@dt-ui/react-core';
import { render } from '@testing-library/react';

import { Button } from '../../../dt-ui-react/components/buttons';
import { NoDataIcon } from '../../../dt-ui-react/core';

import { EmptyState } from './EmptyState';

describe('<EmptyState /> component', () => {
  const ProvidedEmptyState = withProviders(EmptyState);
  const title = 'Title here';
  const description = 'Some description here.';

  it('should render Empty State', () => {
    const { container } = render(
      <ProvidedEmptyState>
        <EmptyState.Content description={description} title={title} />
      </ProvidedEmptyState>
    );

    expect(container).toMatchSnapshot();
  });

  it('should render Empty State with a Button', () => {
    const { container } = render(
      <ProvidedEmptyState>
        <EmptyState.Content description={description} title={title} />
        <Button onClick={() => {}} variant='solid'>
          Button
        </Button>
      </ProvidedEmptyState>
    );

    expect(container).toMatchSnapshot();
  });

  it('should render Empty State with image', () => {
    const { container } = render(
      <ProvidedEmptyState>
        <NoDataIcon />
        <EmptyState.Content description={description} title={title} />
      </ProvidedEmptyState>
    );

    expect(container).toMatchSnapshot();
  });
});
