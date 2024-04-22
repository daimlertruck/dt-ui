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

  ${({ theme, isHighlighted, isMulti }) => `
    cursor:pointer;
    align-items: center;
    padding: ${theme.spacing['4xs']} ${theme.spacing['2xs']};
    gap: ${isMulti ? theme.spacing['4xs'] : theme.spacing['5xs']};
    background-color: ${
      isHighlighted ? theme.palette.primary.light : theme.palette.base.default
    };
    color: ${theme.palette.content.body};
    ${theme.fontStyles.body2}

    &[aria-disabled="true"] {
      cursor: not-allowed;
      color: ${theme.palette.content.disabled};
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
