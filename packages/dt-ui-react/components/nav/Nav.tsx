import { BaseProps } from '@dt-ui/react-core';

import { NavStyled, NavListStyled } from './Nav.styled';

export const Nav = ({ children, dataTestId }: BaseProps) => {
  return (
    <NavStyled data-testid={dataTestId ?? 'navbar'}>
      <NavListStyled>{children}</NavListStyled>
    </NavStyled>
  );
};
