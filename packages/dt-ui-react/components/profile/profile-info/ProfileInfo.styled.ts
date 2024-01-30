import styled from '@emotion/styled';

import { hexToRgba } from '../../../utils';
import { DropdownOptionStyled } from '../../dropdown/components/option/DropdownOption.styled';

export const ProfileInfoStyled = styled.ul`
  ${({ theme }) => `
    padding: ${theme.spacing.none};
    background: ${theme.palette.base.default};
    box-shadow: ${theme.shadows[4]};
    border-radius: ${theme.spacing.xxsmall};
    color: ${theme.palette.content.body};
    position: absolute;
    right: 0;
    z-index: 1;
  `}
`;

export const ProfileInfoItemStyled = styled(DropdownOptionStyled)`
  ${({ theme }) => `
    ${theme.fontStyles.pSmall}
    padding: ${theme.spacing.xsmall} ${theme.spacing.gutter};
    display: grid;
    grid-template-columns: 20px auto;
    gap: 10px;
    align-items: center;

    svg {
      justify-self: center;
    }

    &[disabled] {
      opacity: 1;
      background-color: ${hexToRgba(theme.palette.base.dark, 0.4)};
    }

    &:first-of-type {
      border-radius:  ${theme.spacing.xxsmall} ${theme.spacing.xxsmall} 0px 0px;
    }

    &:last-child {
      font-weight: bold;

      &:hover {
        background: ${theme.palette.primary.default};
        color: ${theme.palette.primary.contrast};
        cursor: pointer;
        border-radius: 0px 0px ${theme.spacing.xxsmall} ${
    theme.spacing.xxsmall
  };

        path {
          fill: ${theme.palette.base.default};
        }
      }
    }
  `}
`;
