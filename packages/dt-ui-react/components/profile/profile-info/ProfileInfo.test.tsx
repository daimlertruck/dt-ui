import { render, screen } from '@testing-library/react';
import React from 'react';

import { withProviders } from '../../../utils';

import { ProfileInfo } from './ProfileInfo';

describe('<ProfileInfo /> component', () => {
  const ProvidedProfileInfo = withProviders(ProfileInfo);

  it('renders ul html element with the correct list of items', () => {
    render(
      <ProvidedProfileInfo>
        <ProfileInfo.Item>Item</ProfileInfo.Item>
      </ProvidedProfileInfo>
    );

    const list = screen.getByRole('list');
    expect(list).toHaveTextContent('Item');
  });
});
