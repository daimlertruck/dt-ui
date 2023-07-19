import { render } from '@testing-library/react';
import React from 'react';

import { withProviders } from '../../utils';

import { Avatar } from './Avatar';
import { AvatarType } from './constants';

describe('<Avatar /> component', () => {
  const ProvidedAvatar = withProviders(Avatar);

  it('renders span html element with the correct content', () => {
    const { container } = render(
      <ProvidedAvatar type={AvatarType.Profile} title='User Name' />
    );

    expect(container).toMatchSnapshot();
  });
});
