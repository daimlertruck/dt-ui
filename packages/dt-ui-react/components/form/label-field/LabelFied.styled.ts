import styled from '@emotion/styled';

export interface LabelFieldProps {
  isActive: boolean;
  disabled?: boolean;
}

export const LabelFieldStyled = styled.label<LabelFieldProps>`
  ${({ theme }) => theme.fontStyles.pSmall}

  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.grey_90 : theme.colors.grey_100};
  cursor: inherit;
  font-size: ${({ isActive }) => (isActive ? '.75rem' : '1rem')};
  left: 15px;
  top: 15px;
  position: absolute;

  transform: ${({ isActive }) =>
    isActive ? 'translateY(-45%)' : 'translateY(0)'};
  transition: transform 150ms ease-out, font-size 150ms ease-out;
`;
