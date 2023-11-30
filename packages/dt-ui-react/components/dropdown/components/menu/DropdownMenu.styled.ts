import styled from '@emotion/styled';

export const DropdownMenuStyled = styled.ul`
  ${({ theme }) => `
    background: ${theme.colors.white};
    border: 1px solid ${theme.colors.grey_90};
    border-radius: 3px;
    color: ${theme.colors.grey_300};
    width: 100%;
    padding: ${theme.spacing.none};
    margin: ${theme.spacing.xxxsmall} 0px;
    position: absolute;
    right: 0;
    z-index: 1;
    max-height: 180px;
    overflow: auto;
  `}
`;
