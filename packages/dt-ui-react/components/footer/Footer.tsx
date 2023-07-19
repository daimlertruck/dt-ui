import { Nav } from '../nav';

import { FooterStyled, FooterItemStyled } from './Footer.styled';

interface FooterProps {
  children: React.ReactNode;
  isFixed?: boolean;
}

export const Footer = ({ children, isFixed }: FooterProps) => {
  return (
    <FooterStyled isFixed={isFixed}>
      <Nav>{children}</Nav>
    </FooterStyled>
  );
};

export const FooterItem = ({ children }: FooterProps) => {
  return <FooterItemStyled>{children}</FooterItemStyled>;
};
