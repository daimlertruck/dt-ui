import React, { useState } from 'react';

import { AvatarThumbnail } from '../../core/assets';
import { acronymGenerator } from '../../utils';
import { Tooltip } from '../tooltip';
import { TooltipContent } from '../tooltip/components';

import { AvatarStyled, AvatarStyledProps } from './Avatar.styled';
import { AvatarType, AvatarSize } from './constants';

export interface AvatarProps extends AvatarStyledProps {
  title: string;
  imageSrc?: string;
  dataTestId?: string;
}

export const Avatar = ({
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
      <TooltipContent>{title}</TooltipContent>
    </Tooltip>
  );
};
