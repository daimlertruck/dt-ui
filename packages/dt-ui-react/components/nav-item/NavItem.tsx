import { NavItemStyled } from './NavItem.styled';

export interface NavItemProps {
  matchRoute: boolean;
  children: React.ReactNode;
}

export const NavItem = ({ matchRoute, children }: NavItemProps) => {
  return <NavItemStyled matchRoute={matchRoute}>{children}</NavItemStyled>;
};
