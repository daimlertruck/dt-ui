import { BaseProps } from '../../../../types';

import { DrawerContentStyled } from './DrawerBody.styled';

export const DrawerBody = ({ children }: BaseProps) => (
  <DrawerContentStyled>{children}</DrawerContentStyled>
);
