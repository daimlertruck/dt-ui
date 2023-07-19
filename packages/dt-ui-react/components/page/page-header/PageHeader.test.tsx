import { render } from '@testing-library/react';
import React from 'react';

import { PageHeader, Button } from '../../..';
import { withProviders } from '../../../utils';
import { PageType } from '../constants';

describe('<PageHeader /> component', () => {
  const ProvidedPageHeader = withProviders(PageHeader);

  describe('When used in list page', () => {
    it('Should render a header element with display flex and correct given content', () => {
      const { container } = render(
        <ProvidedPageHeader dataTestId='list'>
          <PageHeader.Title>Page Title</PageHeader.Title>
        </ProvidedPageHeader>
      );

      expect(container).toMatchSnapshot();
    });
  });

  describe('When used in detail page', () => {
    it('Should render a header element with display flex and correct given childrens', () => {
      const { container } = render(
        <ProvidedPageHeader variant={PageType.Detail} dataTestId='detail'>
          <PageHeader.Segment>
            <PageHeader.Title variant={PageType.Detail}>
              Detail Page Title
            </PageHeader.Title>
          </PageHeader.Segment>
          <PageHeader.Description>
            Some optional Description
          </PageHeader.Description>
          <PageHeader.Segment isAlignToRight={true}>
            <Button onClick={() => null} dataTestId='click-me'>
              Click Me
            </Button>
          </PageHeader.Segment>
        </ProvidedPageHeader>
      );

      expect(container).toMatchSnapshot();
    });
  });
});
