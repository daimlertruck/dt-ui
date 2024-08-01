import styled from '@emotion/styled';

export interface LabelFieldProps {
  isActive: boolean;
  disabled?: boolean;
  hasError?: boolean;
}

export const LabelFieldStyled = styled.label<LabelFieldProps>`
  ${({ theme, isActive }) =>
    isActive ? theme.fontStyles.body3 : theme.fontStyles.body2}

  color: ${({ theme, disabled, hasError }) => {
    if (disabled) {
      return theme.palette.content.light;
    }
    if (hasError) {
      return theme.palette.error.default;
    }
    return theme.palette.content.default;
  }};
  cursor: inherit;
  left: 15px;
  top: 15px;
  position: absolute;

  transform: ${({ isActive }) =>
    isActive ? 'translateY(-45%)' : 'translateY(0)'};
  transition: transform 150ms ease-out, font-size 150ms ease-out;
`;
