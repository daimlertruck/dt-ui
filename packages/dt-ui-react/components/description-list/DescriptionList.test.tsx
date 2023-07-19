import { render } from '@testing-library/react';
import React from 'react';

import { withProviders } from '../../utils';

import { DescriptionList } from './DescriptionList';

describe('DescriptionList', () => {
  const ProvidedDescriptionList = withProviders(DescriptionList);

  it('renders DescriptionList correctly', () => {
    const { container } = render(
      <ProvidedDescriptionList>
        <DescriptionList.Term>Term 1</DescriptionList.Term>
        <DescriptionList.Description>
          Some description 1
        </DescriptionList.Description>
        <DescriptionList.Term>Term 2</DescriptionList.Term>
        <DescriptionList.Description>
          Some description 2
        </DescriptionList.Description>
        <DescriptionList.Term>Term 3</DescriptionList.Term>
        <DescriptionList.Description>
          Some description 3
        </DescriptionList.Description>
      </ProvidedDescriptionList>
    );

    expect(container).toMatchSnapshot();
  });
});
