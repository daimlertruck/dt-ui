import styled from '@emotion/styled';

export const SearchFieldIconStyled = styled.span`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  display: flex;
  flex-flow: column nowrap;
  height: 35px;
  justify-content: space-around;
  position: absolute;
  right: 10px;
  top: 10px;
  width: 35px;

  svg {
    fill: ${({ theme }) => theme.colors.grey_100};
    transition: all 0.2s ease-in-out;
  }

  &:hover {
    svg {
      fill: ${({ theme }) => theme.colors.grey_200};
    }
  }
`;
