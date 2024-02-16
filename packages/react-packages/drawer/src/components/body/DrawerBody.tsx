import { BaseProps } from '@dt-ui/react-core';

import { DrawerContentStyled } from './DrawerBody.styled';

export const DrawerBody = ({ children }: BaseProps) => (
  <DrawerContentStyled>{children}</DrawerContentStyled>
);
