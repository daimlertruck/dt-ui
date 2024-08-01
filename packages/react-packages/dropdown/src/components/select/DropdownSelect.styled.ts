import styled from '@emotion/styled';

interface SelectDropdownStyledProps {
  hasBorder?: boolean;
  hasError?: boolean;
}

export const SelectDropdownStyled = styled.button<SelectDropdownStyledProps>`
  ${({ theme, style, hasBorder = true, hasError = false }) => `
    background: ${theme.palette.surface.contrast};
    border: ${hasBorder ? `1px solid ${theme.palette.border.default}` : '0'};
    border-radius: 3px;
    padding: ${theme.spacing.xsmall} ${hasBorder ? theme.spacing.xmedium : '0'};
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: left;
    width: 100%;
    height: 53px;
    cursor: pointer;

    ${hasError && `border-bottom: 2px solid ${theme.palette.error.default}`};
    &:disabled {
      pointer-events: none;
      background-color: ${theme.palette.surface.light};
    }
    
    ${style}
  `}
`;
