import styled from '@emotion/styled';

import {
  TextFieldVariant,
  TextFieldBackgroundFill,
  getThemedBackgroundFill,
} from './constants';

export interface InputFieldStyledProps {
  isFloatingLabel: boolean;
  isSearchType: boolean;
}

export interface InputWrapperStyledProps {
  isFloatingLabel: boolean;
  variant: TextFieldVariant;
  backgroundFill: TextFieldBackgroundFill;
}

export const TextFieldStyled = styled.div<{
  isFloatingLabel?: boolean;
  hasPrefix?: boolean;
}>`
  ${({ theme, isFloatingLabel = true, hasPrefix = false }) => `
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing['5xs']};
    width: 100%;
    position: relative;
    

    ${
      hasPrefix
        ? `
    label {
      left: 0;
      padding-left: ${isFloatingLabel ? theme.spacing.l : ''};
    }
    `
        : ''
    }

    i {
      color: ${theme.palette.content.medium};
    }

    :has(input[disabled]) {
      i, label > span {
        color: ${theme.palette.content.light};
      }
    }

    :has(input[readonly]:not(input[disabled])) {
      label, label > span {
        color: ${
          isFloatingLabel
            ? theme.palette.content.medium
            : theme.palette.content.default
        };
        }
      }
  `}

  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration {
    display: none;
  }
`;

export const InputFieldStyled = styled.input<InputFieldStyledProps>`
  ${({ theme, isFloatingLabel, isSearchType }) => `
    ${theme.fontStyles.body2}
    border: 0;
    outline: 0;
    width: 100%;
    background-color: inherit;
    


    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
        transition: background-color 5000s ease-in-out 0s;
    }

    &::placeholder {
      color: ${isFloatingLabel ? 'transparent' : theme.palette.content.medium};
    }

    padding: ${
      isFloatingLabel && !isSearchType
        ? `${theme.spacing.xs} 0 ${theme.spacing['4xs']} 0`
        : ''
    };

  `}
`;

export const InputExtraPrefixStyled = styled.div<{ isClickable?: boolean }>`
  ${({ theme, onClick }) => {
    const isClickable = !!onClick;

    return `
    display: flex;
    cursor: ${isClickable ? 'pointer' : 'default'};

    ${
      isClickable &&
      `
        &:hover > i  {
          color: ${theme.palette.content.dark};
        }
      `
    }
  
  `;
  }}
`;

export const InputExtraSuffixStyled = styled.div<{ isClickable?: boolean }>`
  ${({ theme, onClick }) => {
    const isClickable = !!onClick;

    return `
    display: flex;
    cursor: ${isClickable ? 'pointer' : 'default'};

    ${
      isClickable &&
      `
        &:hover > i  {
          color: ${theme.palette.content.dark};
        }
      `
    }
  `;
  }}
`;

export const TextFieldMessageStyled = styled.div`
  padding-left: ${({ theme }) => theme.spacing['2xs']};
`;

export const ResetInputIconStyled = styled.div`
  ${({ theme }) => `
    cursor: pointer;
    display: flex;

    :hover > i {
      color: ${theme.palette.content.dark}
    }
  `}
`;

export const InputWrapperStyled = styled.div<InputWrapperStyledProps>`
  ${({ theme, isFloatingLabel, variant, backgroundFill }) => `
    display:flex;
    flex-direction: row;
    align-items: center;
    min-width: 198px;
    width: 100%;
    height: 54px;
    color: ${theme.palette.content.default};
    gap: ${theme.spacing['4xs']};
    background-color: ${getThemedBackgroundFill(backgroundFill, theme)};
    
    padding-inline: ${theme.spacing['3xs']};

    border-radius: ${
      variant === 'outlined'
        ? theme.shape.formField
        : `${theme.shape.formField} ${theme.shape.formField} 0 0`
    };
    border-style: solid;
    ${variant === 'outlined' ? 'border-width: 1px' : 'border-width: 0 0 1px'};
    border-color: ${theme.palette.border.medium};

    &:has(input:focus) {
      border-color: ${theme.palette.primary.default};
    }

    &:has(input[data-error="true"]) {
      border-color: ${theme.palette.error.default};

      &:focus {
        border-color: ${theme.palette.error.default};
      }
    }

    &:has(input[readonly]:not([disabled])) {
      background-color: ${theme.palette.surface.default};
      color: ${theme.palette.content.medium};
    }

    &:has(input[disabled]), &:has(input[disabled]) > * {
      color: ${theme.palette.content.light};
      background-color: ${theme.palette.surface.light};
      border-color: ${theme.palette.border.default};
      cursor: not-allowed;

      input::placeholder {
        color: ${isFloatingLabel ? 'transparent' : theme.palette.content.light};
      }
    }
  `}
`;
