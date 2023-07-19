import { BaseProps } from '../../../types';

import { ProfileInfoItemStyled, ProfileInfoStyled } from './ProfileInfo.styled';

export interface ProfileInfoItemProps extends BaseProps {
  disabled?: boolean;
  onClick?: () => void;
}

export const ProfileInfo = ({ children }: BaseProps) => {
  return <ProfileInfoStyled>{children}</ProfileInfoStyled>;
};

ProfileInfo.Item = function ProfileInfoItem({
  children,
  disabled,
  onClick,
}: ProfileInfoItemProps) {
  return (
    <ProfileInfoItemStyled disabled={disabled} onClick={onClick} role='option'>
      {children}
    </ProfileInfoItemStyled>
  );
};
