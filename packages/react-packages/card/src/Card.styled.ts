import styled from '@emotion/styled';

interface CardStyledProps {
  selected: boolean;
  variant: 'vertical' | 'horizontal';
}

interface CardContentStyledProps {
  variant: 'vertical' | 'horizontal';
}

export const CardStyled = styled.div<CardStyledProps>`
  ${({ theme, selected, variant }) => `
    position: relative;
    margin: ${theme.spacing.none};
    background-color: ${theme.palette.surface.contrast};
    width: fit-content;
    max-width: ${variant === 'horizontal' ? '560px' : '360px'};
    height: 100%;
    transition: all 0.2s ease-in-out;
    border-radius: 3px;
    display: flex;
    flex-direction: ${variant === 'vertical' ? 'column' : 'row'};
    border: 1px solid ${
      selected ? theme.palette.primary.default : theme.palette.surface.default
    };
    background-color: ${
      selected ? theme.palette.primary.light : theme.palette.surface.contrast
    };

    ${
      !selected &&
      `&:hover {
        background-color: ${theme.palette.surface.default};
        box-shadow: ${theme.shadows.xs};
      }`
    }
  `}
`;

export const CardContentStyled = styled.div<CardContentStyledProps>`
  width: 100%;
  display: flex;
  flex-direction: column;

  ${({ theme, variant }) => `
    margin-top: ${variant === 'horizontal' ? theme.spacing['m'] : 0};
    padding: ${theme.spacing['xs']};
    gap: ${theme.spacing['2xs']}
  `}
`;

export const CardTitleStyled = styled.div`
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const CardDetailStyled = styled.div`
  width: 100%;
  max-width: 100%;
  height: auto;
  display: flex;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const SelectionWrapperStyled = styled.div`
  position: absolute;
  cursor: pointer;

  ${({ theme }) => `
    top: ${theme.spacing['2xs']};
    right: ${theme.spacing['2xs']};
  `}
`;

export const CardMediaStyled = styled.div`
  display: contents;
`;

export const CardActionsStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  ${({ theme }) => `
    margin-top: ${theme.spacing['4xs']};
    gap: ${theme.spacing['2xs']};
  `};
`;
