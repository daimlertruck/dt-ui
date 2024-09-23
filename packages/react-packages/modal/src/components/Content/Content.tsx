import { BaseProps } from '@dt-ui/react-core';

import { ContentStyled } from './Content.styled';

export const ModalContent = ({ children, style, dataTestId }: BaseProps) => {
  return (
    <ContentStyled data-testid={dataTestId} style={style}>
      {children}
    </ContentStyled>
  );
};
