import styled from '@emotion/styled';

export const DropdownStyled = styled.div`
  ${({ theme, style }) => `
    margin: ${theme.spacing.none};
    display: inline-block;
    position: relative;
    width: 100%;
    ${style}
  `}
`;
