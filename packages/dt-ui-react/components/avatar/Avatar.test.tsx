import { render, screen } from '@testing-library/react';
import React from 'react';

import { withProviders } from '../../utils';

import { Avatar } from './Avatar';
import { AvatarType, AvatarSize } from './constants';
import avatarExampleImage from './images/example-avatar-image.png';
import thumbnailSrc from './images/thumbnail.svg';

describe('<Avatar /> component', () => {
  const ProvidedAvatar = withProviders(Avatar);

  it('renders span html element with the correct content', () => {
    const { container } = render(
      <ProvidedAvatar
        type={AvatarType.Primary}
        size={AvatarSize.Medium}
        title='User Name'
      />
    );

    expect(container).toMatchSnapshot();
  });

  it('renders an image element for profile type with the correct alt text', () => {
    render(
      <ProvidedAvatar
        type={AvatarType.Profile}
        size={AvatarSize.Medium}
        title='User Name'
        imageSrc={avatarExampleImage}
      />
    );

    const imgElement = screen.getByRole('img');
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('alt', 'User Name');
  });

  it('renders a div element with the correct acronym for its title', () => {
    render(
      <ProvidedAvatar
        type={AvatarType.Primary}
        size={AvatarSize.Medium}
        title='User Name'
      />
    );

    const divElement = screen.getByTestId('avatar');
    expect(divElement).toBeInTheDocument();
    expect(divElement).toHaveTextContent('UN');
  });

  it('renders thumbnail image for profile type when imageSrc fails to load', () => {
    render(
      <ProvidedAvatar
        type={AvatarType.Profile}
        size={AvatarSize.Medium}
        title='User Name'
        imageSrc='invalid-image-url.png'
      />
    );

    const thumbnailImage = screen.getByAltText('User Name') as HTMLImageElement;
    expect(thumbnailImage).toBeInTheDocument();
    expect(thumbnailImage.src).toContain(thumbnailSrc);
  });

  it('renders successfully "avatarExampleImage" for profile type', () => {
    render(
      <ProvidedAvatar
        type={AvatarType.Profile}
        size={AvatarSize.Medium}
        title='User Name'
        imageSrc={avatarExampleImage}
      />
    );

    const thumbnailImage = screen.getByAltText('User Name') as HTMLImageElement;
    expect(thumbnailImage).toBeInTheDocument();
    expect(thumbnailImage.src).toContain(avatarExampleImage);
  });
});
