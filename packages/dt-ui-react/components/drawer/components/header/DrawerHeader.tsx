import { BaseProps } from '../../../../types';

import { HeaderStyled } from './DrawerHeader.styled';

export const DrawerHeader = ({ children }: BaseProps) => (
  <HeaderStyled>{children}</HeaderStyled>
);
