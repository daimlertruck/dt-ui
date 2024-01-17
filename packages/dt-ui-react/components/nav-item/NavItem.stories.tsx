import { NavItem } from './NavItem';

export default {
  title: 'Data Display/NavItem',
  component: NavItem,
};

export const Active = () => <NavItem matchRoute>ActiveItem</NavItem>;
