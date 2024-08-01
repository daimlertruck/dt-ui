import styled from '@emotion/styled';

export const SearchFieldIconStyled = styled.span`
  align-items: center;
  background-color: ${({ theme }) => theme.palette.surface.default};
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
    fill: ${({ theme }) => theme.palette.content.default};
    transition: all 0.2s ease-in-out;
  }

  &:hover {
    svg {
      fill: ${({ theme }) => theme.palette.content.dark};
    }
  }
`;
