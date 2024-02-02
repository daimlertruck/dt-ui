import styled from '@emotion/styled';

export interface LabelFieldProps {
  isActive: boolean;
  disabled?: boolean;
}

export const LabelFieldStyled = styled.label<LabelFieldProps>`
  ${({ theme }) => theme.fontStyles.alpha.pSmall}

  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.gray_90 : theme.colors.gray_100};
  cursor: inherit;
  font-size: ${({ isActive }) => (isActive ? '.75rem' : '1rem')};
  left: 15px;
  top: 15px;
  position: absolute;

  transform: ${({ isActive }) =>
    isActive ? 'translateY(-45%)' : 'translateY(0)'};
  transition: transform 150ms ease-out, font-size 150ms ease-out;
`;
