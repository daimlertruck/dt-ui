import styled from '@emotion/styled';

import { Direction } from '../../types';

interface GroupStyledProps {
  direction: Direction;
}

export const RadioInputStyled = styled.input`
  ${({ theme }) => `
    background: ${theme.colors.white};
    border: 1px solid ${theme.palette.alpha.neutralLight_100};
    border-radius: 50%;
    width: 16px;
    height: 16px;
    appearance: none;
    
    &:disabled {
      background: ${theme.palette.alpha.neutralLight_300};
      pointer-events: none;
    }

    &:disabled + label {
      color: ${theme.palette.alpha.neutral};
    }

    &:checked {
      border-width: 5px;
      border-color: ${theme.palette.alpha.primary};
    }

    &:checked:disabled {
      border-color: ${theme.palette.alpha.neutralLight_100};
    }

    &:checked:before {
      content: '';
      height: 10px;
      width: 10px;
      border-radius: 50%;
      display: block;
    }
  `}
`;

export const RadioLabelStyled = styled.label`
  ${({ theme }) => `
    ${theme.fontStyles.alpha.p};
    color: ${theme.colors.gray_200};
    cursor: inherit;
  `}
`;

export const GroupStyled = styled.div<GroupStyledProps>`
  ${({ direction }) => `
    display: flex;
    flex-direction: ${direction};
    align-items: center;
    gap: 12px;
  `}
`;
