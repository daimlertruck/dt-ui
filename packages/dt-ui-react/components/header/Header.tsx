import { BaseProps } from '@dt-ui/react-core';

import { HeaderStyled } from './Header.styled';

export const Header = ({ children, dataTestId }: BaseProps) => {
  return (
    <HeaderStyled data-testid={dataTestId ?? 'navbar-header'}>
      {children}
    </HeaderStyled>
  );
};
