import { Tooltip } from '@dt-ui/react-tooltip';
import React, { useState } from 'react';

import { AvatarThumbnail } from '../../../dt-ui-react/core';

import { AvatarStyled, AvatarStyledProps } from './Avatar.styled';
import { AvatarType, AvatarSize } from './constants';
import { acronymGenerator } from './utils';

export interface AvatarProps extends AvatarStyledProps {
  title: string;
  imageSrc?: string;
  dataTestId?: string;
}

const Avatar = ({
  title,
  type = AvatarType.Primary,
  size = AvatarSize.Medium,
  imageSrc = '',
  dataTestId,
}: AvatarProps) => {
  const [showThumbnail, setShowThumbnail] = useState(false);

  const handleImageError = () => {
    setShowThumbnail(true);
  };

  const renderProfileImage = () =>
    showThumbnail ? (
      <AvatarThumbnail />
    ) : (
      <img alt={title} onError={handleImageError} src={imageSrc} />
    );

  return (
    <Tooltip>
      <AvatarStyled
        data-testid={dataTestId ?? 'avatar'}
        size={size}
        type={type}
      >
        {type === AvatarType.Profile ? (
          renderProfileImage()
        ) : (
          <div>{acronymGenerator(title)}</div>
        )}
      </AvatarStyled>
      <Tooltip.Content>{title}</Tooltip.Content>
    </Tooltip>
  );
};

export default Avatar;
