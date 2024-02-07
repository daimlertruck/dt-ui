import { BaseProps } from '@dt-ui/react-core';

import { HeaderStyled } from './DrawerHeader.styled';

export const DrawerHeader = ({ children }: BaseProps) => (
  <HeaderStyled>{children}</HeaderStyled>
);
