import { render, screen } from '@testing-library/react';
import React from 'react';

import { withProviders } from '../../utils';

import { Avatar } from './Avatar';
import { AvatarType, AvatarSize } from './constants';
import avatarExampleImage from './images/example-avatar-image.png';

describe('<Avatar /> component', () => {
  const ProvidedAvatar = withProviders(Avatar);

  it('renders span html element with the correct content', () => {
    const { container } = render(
      <ProvidedAvatar
        size={AvatarSize.Medium}
        title='User Name'
        type={AvatarType.Primary}
      />
    );

    expect(container).toMatchSnapshot();
  });

  it('renders an image element for profile type with the correct alt text', () => {
    render(
      <ProvidedAvatar
        imageSrc={avatarExampleImage}
        size={AvatarSize.Medium}
        title='User Name'
        type={AvatarType.Profile}
      />
    );

    const imgElement = screen.getByRole('img');
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('alt', 'User Name');
  });

  it('renders a div element with the correct acronym for its title', () => {
    render(
      <ProvidedAvatar
        size={AvatarSize.Medium}
        title='User Name'
        type={AvatarType.Primary}
      />
    );

    const divElement = screen.getByTestId('avatar');
    expect(divElement).toBeInTheDocument();
    expect(divElement).toHaveTextContent('UN');
  });

  it('renders thumbnail image for profile type when imageSrc fails to load', () => {
    render(
      <ProvidedAvatar
        imageSrc=''
        size={AvatarSize.Medium}
        title='User Name'
        type={AvatarType.Profile}
      />
    );

    const thumbnailImage = screen.getByAltText('User Name') as HTMLImageElement;
    expect(thumbnailImage).toBeInTheDocument();
  });

  it('renders successfully "avatarExampleImage" for profile type', () => {
    render(
      <ProvidedAvatar
        imageSrc={avatarExampleImage}
        size={AvatarSize.Medium}
        title='User Name'
        type={AvatarType.Profile}
      />
    );

    const thumbnailImage = screen.getByAltText('User Name') as HTMLImageElement;
    expect(thumbnailImage).toBeInTheDocument();
    expect(thumbnailImage.src).toContain(avatarExampleImage);
  });
});
