import { BaseProps } from '@dt-ui/react-core';

import { ContentStyled } from './Content.styled';

export const ModalContent = ({ children }: BaseProps) => {
  return <ContentStyled>{children}</ContentStyled>;
};
