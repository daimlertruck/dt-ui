import { BaseProps } from '@dt-ui/react-core';

import { NavContainerStyled } from './NavContainer.styled';

export const NavContainer = ({ children, dataTestId }: BaseProps) => {
  return (
    <NavContainerStyled data-testid={dataTestId ?? 'nav-container'}>
      {children}
    </NavContainerStyled>
  );
};
