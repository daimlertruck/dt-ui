import { useTheme } from '@emotion/react';

import { ArrowDropDown, ArrowDropUp } from '../../../core';
import { Avatar, AvatarType, AvatarSize } from '../../avatar';

import { ProfileSelectStyled } from './ProfileSelect.styled';

type ProfileSelectProps = {
  isLoading?: boolean;
  isMenuOpen: boolean;
  title: string;
  onClick: () => void;
};

export const ProfileSelect = ({
  isLoading,
  isMenuOpen,
  title,
  onClick,
}: ProfileSelectProps) => {
  const theme = useTheme();

  return (
    <ProfileSelectStyled
      data-testid='profile-selector'
      disabled={isLoading}
      onClick={onClick}
    >
      <Avatar
        size={AvatarSize.Medium}
        title={title}
        type={AvatarType.Profile}
      />
      {!isMenuOpen ? (
        <ArrowDropDown
          color={isLoading ? theme.colors.grey_90 : theme.colors.white}
        />
      ) : (
        <ArrowDropUp color={theme.colors.white} />
      )}
    </ProfileSelectStyled>
  );
};
