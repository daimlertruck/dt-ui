import { BaseProps } from '@dt-ui/react-core';

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
}: ModalFooterProps) => {
  return (
    <FooterStyled
      hasBackgroundColor={hasBackgroundColor}
      hasBorder={hasBorder}
      style={style}
    >
      {children}
    </FooterStyled>
  );
};
