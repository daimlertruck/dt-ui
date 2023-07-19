import styled from '@emotion/styled';

export const DiscStyled = styled.span`
  width: 5px;
  height: 5px;
  background: ${({ theme }) => theme.colors.black};
  border-radius: 50%;
  display: inline-block;
  margin-right: 3px;
`;
