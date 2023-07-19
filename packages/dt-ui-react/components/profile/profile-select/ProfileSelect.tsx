import { useTheme } from '@emotion/react';

import { ArrowDropDown, ArrowDropUp } from '../../../core';
import { Avatar, AvatarType } from '../../avatar';

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
      onClick={onClick}
      disabled={isLoading}
    >
      <Avatar type={AvatarType.Profile} title={title} isLoading={isLoading} />
      {!isMenuOpen ? (
        <ArrowDropDown
          color={isLoading ? theme.colors.gray_90 : theme.colors.white}
        />
      ) : (
        <ArrowDropUp color={theme.colors.white} />
      )}
    </ProfileSelectStyled>
  );
};
