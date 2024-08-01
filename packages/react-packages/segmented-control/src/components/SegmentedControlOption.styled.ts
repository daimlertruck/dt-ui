import styled from '@emotion/styled';

export const SegmentedControlOptionStyled = styled.button<{
  showLabel: boolean;
}>`
  ${({ theme, showLabel }) => `
    ${theme.fontStyles.body2};

    display: flex;
    align-items: center;
    gap: ${theme.spacing['5xs']};
    cursor: pointer;
    background-color: ${theme.palette.surface.contrast};
    color: ${theme.palette.content.default};
    border: none;
    border-radius: ${theme.shape.button};
    padding: ${theme.spacing['5xs']} ${
    theme.spacing[showLabel ? '3xs' : '5xs']
  };

    &:not(:disabled):hover {
      background-color: ${theme.palette.primary.light};
      color: ${theme.palette.content.default};

      i {
        color: ${theme.palette.content.dark};
      }
    }

    &:not(:disabled)[aria-pressed="true"] {
      background-color: ${theme.palette.primary.default};
      color: ${theme.palette.content.contrast};

      i {
        color: ${theme.palette.content.contrast};
      }
    }

    &:disabled {
        color: ${theme.palette.content.light};
        cursor: not-allowed;

        i {
          color: ${theme.palette.content.light};
        }
    }

  `}
`;
