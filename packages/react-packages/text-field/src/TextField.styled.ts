import styled from '@emotion/styled';

export interface InputFieldStyledProps {
  isFloatingLabel: boolean;
  variant: 'outlined' | 'bottomLine';
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
`;

export const InputFieldStyled = styled.input<InputFieldStyledProps>`
  ${({ theme, isFloatingLabel, variant }) => `
    ${theme.fontStyles.body2}

    color: ${theme.palette.content.default};

    background-color: ${theme.palette.surface.contrast};
    border-radius: ${
      variant === 'outlined'
        ? theme.shape.formField
        : `${theme.shape.formField} ${theme.shape.formField} 0 0`
    };
    border-style: solid;
    outline: 0;

    ${variant === 'outlined' ? 'border-width: 1px' : 'border-width: 0 0 1px'};
    
    border-color: ${theme.palette.border.dark};

    min-width: 198px;
    padding: ${
      isFloatingLabel
        ? `${theme.spacing.xs} ${theme.spacing['2xs']} ${theme.spacing['4xs']}`
        : theme.spacing['2xs']
    };
    width: 100%;
    height: 53px;

    &:focus {
      border-color: ${theme.palette.primary.default};
    }

    &[data-error="true"] {
      border-color: ${theme.palette.error.default};

      &:focus {
        border-color: ${theme.palette.error.default};
      }
    }

    &[readonly]:not([disabled]) {
      background-color: ${theme.palette.surface.default};
      color: ${theme.palette.content.medium};
    }

    &:disabled {
      color: ${theme.palette.content.light};
      background-color: ${theme.palette.surface.light};
      border-color: ${theme.palette.border.default};
      cursor: not-allowed;

      &::placeholder {
       color: ${isFloatingLabel ? 'transparent' : theme.palette.content.light};
      }
    }

    &::placeholder {
      color: ${isFloatingLabel ? 'transparent' : theme.palette.content.medium};
    }
  `}
`;

export const InputExtraPrefixStyled = styled.span<{ isFloatingLabel: boolean }>`
  ${({ theme }) => `
  position: absolute;
  left: 12px;
  width: 24px;
  height: 24px;

  ~ input {
     padding-left: ${theme.spacing.l};
    }
  `}
`;

export const InputExtraSuffixStyled = styled.span`
  position: absolute;
  right: 12px;
  width: 24px;
  height: 24px;

  ~ input {
    padding-right: ${({ theme }) => theme.spacing.l};
  }
`;

export const InputWrapperStyled = styled.div`
  display: flex;
  align-items: center;
`;

export const TextFieldMessageStyled = styled.div`
  padding-left: ${({ theme }) => theme.spacing['2xs']};
`;
