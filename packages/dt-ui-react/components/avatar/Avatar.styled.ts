import styled from '@emotion/styled';

import { AvatarType } from './constants/AvatarType';

export interface AvatarStyledProps {
  isLoading?: boolean;
  type: AvatarType;
}

export const AvatarStyled = styled.div<AvatarStyledProps>`
  ${({ theme, isLoading, type }) => `
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    border: ${theme.spacing.none};
    border-radius: ${theme.spacing.large};
    

    ${
      type === AvatarType.Profile &&
      `
        width: ${theme.spacing.large};
        height: ${theme.spacing.large};
        background: ${isLoading ? theme.colors.gray_90 : theme.colors.white};
      `
    };

    ${
      type === AvatarType.TeamMember &&
      `
        width: ${theme.spacing.medium};
        height: ${theme.spacing.medium};
        background: ${theme.colors.gray_90};
        margin: 0px 10px;
      `
    }
  `}
`;
