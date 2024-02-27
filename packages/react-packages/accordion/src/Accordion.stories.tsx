import React from 'react';

import { AccordionBaseProps } from './Accordion';
import { AccordionBackgroundColor } from './constants';

import { Accordion } from '.';

export default {
  title: 'Data Display/Accordion',
  component: Accordion,
  argTypes: {
    backgroundColor: {
      mapping: AccordionBackgroundColor,
      options: Object.values(AccordionBackgroundColor).filter(
        (x) => typeof x === 'string'
      ),
      control: { type: 'inline-radio' },
    },
  },
};

export const Default = ({ ...props }: AccordionBaseProps) => {
  const headerCustomContent = <>Header content here.</>;

  return (
    <Accordion {...props} headerContent={headerCustomContent}>
      Body content here.
    </Accordion>
  );
};

Default.args = {
  isOpen: false,
  backgroundColor: AccordionBackgroundColor.White,
  isDisabled: false,
  headerContent: <>Header content here.</>,
};
