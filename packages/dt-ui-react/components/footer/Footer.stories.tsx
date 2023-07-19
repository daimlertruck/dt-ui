import { Footer, FooterItem } from './Footer';

export default {
  title: 'Data Display/Footer',
  component: Footer,
};

export const Default = () => (
  <Footer>
    <FooterItem>
      <a>First Item</a>
    </FooterItem>
    <FooterItem>
      <a>Second Item</a>
    </FooterItem>
    <FooterItem>
      <a>Third Item</a>
    </FooterItem>
  </Footer>
);
