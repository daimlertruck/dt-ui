import styled from '@emotion/styled';

interface SelectOptionProps {
  isHighlighted: boolean;
  isMulti: boolean;
}

interface CheckIconWrapperProps {
  isCheckHidden: boolean;
}

export const SelectOptionStyled = styled.li<SelectOptionProps>`
  display: flex;

  ${({ theme, isMulti, isHighlighted }) => `
    cursor:pointer;
    align-items: center;
    ${!isMulti && `padding: ${theme.spacing['4xs']} ${theme.spacing['2xs']}`};
    gap: ${isMulti ? theme.spacing['4xs'] : theme.spacing['5xs']};
    background-color: ${
      isHighlighted && !isMulti
        ? theme.palette.primary.light
        : theme.palette.base.default
    };
    color: ${theme.palette.content.body};
    ${theme.fontStyles.body2}

    & > label {
      ${isMulti && `padding: ${theme.spacing['4xs']} ${theme.spacing['2xs']}`};
    }
    
    &:hover,&:focus-within {
      background-color: ${theme.palette.primary.light};
    }

    &[aria-disabled="true"] {
      cursor: not-allowed;
      color: ${theme.palette.content.disabled};
      &:hover {
        background-color: ${theme.palette.base.default};
      }
    }
  `}
`;

export const SelectOptionContentStyled = styled.div`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
`;

export const CheckIconWrapperStyled = styled.div<CheckIconWrapperProps>`
  display: flex;

  ${({ isCheckHidden }) => isCheckHidden && 'visibility: hidden;'};
`;
