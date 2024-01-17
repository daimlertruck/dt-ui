import { Footer, FooterItem } from './Footer';

export default {
  title: 'Data Display/Footer',
  component: Footer,
};

export const Default = () => (
  <Footer>
    <FooterItem>
      <a href='/'>First Item</a>
    </FooterItem>
    <FooterItem>
      <a href='/'>Second Item</a>
    </FooterItem>
    <FooterItem>
      <a href='/'>Third Item</a>
    </FooterItem>
  </Footer>
);
