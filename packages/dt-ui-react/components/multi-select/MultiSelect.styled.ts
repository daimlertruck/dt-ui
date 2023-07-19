import styled from '@emotion/styled';

export const BaseMultiSelectStyled = styled.div`
  ${({ theme }) => `
    margin: ${theme.spacing.none};
    display: inline-block;
    position: relative;
    width: 100%;
  `}
`;
