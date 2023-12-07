import React, { useState } from 'react';

import { acronymGenerator } from '../../utils';
import { Tooltip } from '../tooltip';
import { TooltipContent } from '../tooltip/components';

import { AvatarStyled, AvatarStyledProps } from './Avatar.styled';
import { AvatarType, AvatarSize } from './constants';
import thumbnailSrc from './images/thumbnail.svg';

export interface AvatarProps extends AvatarStyledProps {
  title: string;
  imageSrc?: string;
  dataTestId?: string;
}

export const Avatar = ({
  title,
  type = AvatarType.Primary,
  size = AvatarSize.Medium,
  imageSrc = thumbnailSrc,
  dataTestId,
}: AvatarProps) => {
  const [shownImageSrc, setShownImageSrc] = useState(imageSrc);

  const handleImageError = () => {
    setShownImageSrc(thumbnailSrc);
  };

  return (
    <Tooltip>
      <AvatarStyled
        type={type}
        size={size}
        data-testid={dataTestId ?? 'avatar'}
      >
        {type === AvatarType.Profile ? (
          <img src={shownImageSrc} alt={title} onError={handleImageError} />
        ) : (
          <div>{acronymGenerator(title)}</div>
        )}
      </AvatarStyled>
      <TooltipContent>{title}</TooltipContent>
    </Tooltip>
  );
};
