import { CustomTheme as Theme } from '../../types';
import { acronymGenerator } from '../../utils';
import { Typography } from '../typography';

import { AvatarStyled, AvatarStyledProps } from './Avatar.styled';
import { AvatarType } from './constants';

export interface AvatarProps extends AvatarStyledProps {
  title: string;
  dataTestId?: string;
}

const COLOR: Record<
  AvatarType,
  keyof Theme['colors']['alpha'] | 'unset' | 'inherit'
> = {
  teamMember: 'gray_70',
  profile: 'blue_100',
};

const FONTS: Record<AvatarType, keyof Theme['fontStyles']['alpha']> = {
  teamMember: 'tag',
  profile: 'pXXSmall',
};

export const Avatar = ({
  title,
  isLoading = false,
  type = AvatarType.Profile,
  dataTestId,
}: AvatarProps) => {
  return (
    <AvatarStyled
      isLoading={isLoading}
      type={type}
      data-testid={dataTestId ?? 'avatar'}
    >
      {!isLoading && (
        <Typography
          element='span'
          color={COLOR[type]}
          fontStyles={FONTS[type]}
          style={{ fontWeight: 700 }}
        >
          {acronymGenerator(title)}
        </Typography>
      )}
    </AvatarStyled>
  );
};
