import { BaseProps } from '@dt-dds/react-core';

import { FooterStyled } from './Footer.styled';

export interface ModalFooterProps extends BaseProps {
  hasBackgroundColor?: boolean;
  hasBorder?: boolean;
}

export const ModalFooter = ({
  children,
  style,
  hasBackgroundColor = false,
  hasBorder = false,
  dataTestId,
}: ModalFooterProps) => {
  return (
    <FooterStyled
      data-testid={dataTestId}
      hasBackgroundColor={hasBackgroundColor}
      hasBorder={hasBorder}
      style={style}
    >
      {children}
    </FooterStyled>
  );
};
