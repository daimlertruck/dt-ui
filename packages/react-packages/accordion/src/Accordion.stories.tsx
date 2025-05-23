import { AccordionBaseProps } from './Accordion';

import { Accordion } from '.';

export default {
  title: 'Data Display/Accordion',
  component: Accordion,
};

export const Default = ({ ...props }: AccordionBaseProps) => {
  return <Accordion {...props}>{props.children}</Accordion>;
};

Default.args = {
  isOpen: false,
  hasBackground: true,
  hasBorderBottom: false,
  isDisabled: false,
  headerContent: 'Header content here.',
  children: 'Body content',
};
