import { BaseProps } from '../../types';

import { NavStyled, NavListStyled } from './Nav.styled';

export const Nav = ({ children, dataTestId }: BaseProps) => {
  return (
    <NavStyled data-testid={dataTestId ?? 'navbar'}>
      <NavListStyled>{children}</NavListStyled>
    </NavStyled>
  );
};
