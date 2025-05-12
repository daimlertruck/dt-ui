import styled from '@emotion/styled';

export const HeaderStyled = styled.header`
  position: fixed;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  top: ${({ theme }) => theme.spacing.none};
  width: 90%;
  max-width: ${({ theme }) => theme.breakpoints.xxl}px;
  left: 50%;
  transform: translateX(-50%);
  height: 75px;
  color: ${({ theme }) => theme.colors.alpha.white};
  z-index: 2;

  &:after {
    content: '';
    height: 100%;
    width: 100vw;
    background-color: ${({ theme }) => theme.colors.alpha.blue_500};
    position: absolute;
    z-index: -1;
    left: 50%;
    transform: translateX(-50%);
  }
`;
