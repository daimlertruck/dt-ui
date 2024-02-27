import { BaseProps } from '@dt-ui/react-core';
import { ReactNode, useEffect, useState } from 'react';

import { AccordionStyled, DisabledOverlay } from './Accordion.styled';
import { AccordionHeader, AccordionBody } from './components';
import { AccordionBackgroundColor } from './constants';

export interface AccordionBaseProps extends BaseProps {
  isOpen: boolean;
  headerContent: ReactNode;
  backgroundColor?: AccordionBackgroundColor;
  isDisabled?: boolean;
}

const Accordion = ({
  isOpen,
  headerContent,
  backgroundColor = AccordionBackgroundColor.White,
  isDisabled = false,
  children,
  dataTestId,
  style,
}: AccordionBaseProps) => {
  const [isOpenState, setIsOpenState] = useState(isOpen);

  const toggleOpen = (isOpen: boolean) => setIsOpenState(isOpen);

  useEffect(() => {
    toggleOpen(isOpen);
  }, [isOpen]);

  const handleHeaderClick = () => {
    if (isDisabled) {
      return;
    }

    toggleOpen(!isOpenState);
  };

  const handleHeaderKeyPress = (event: { key: string }) => {
    if (event.key === 'Enter') {
      handleHeaderClick();
    }
  };

  return (
    <AccordionStyled
      backgroundColor={backgroundColor}
      data-testid={dataTestId ?? 'accordion-container'}
      isDisabled={isDisabled}
      style={style}
    >
      {isDisabled ? <DisabledOverlay /> : null}

      <AccordionHeader
        backgroundColor={backgroundColor}
        handleHeaderClick={handleHeaderClick}
        handleHeaderKeyPress={handleHeaderKeyPress}
        isDisabled={isDisabled}
        isOpenState={isOpenState}
      >
        {headerContent}
      </AccordionHeader>

      <AccordionBody isOpenState={isOpenState}>{children}</AccordionBody>
    </AccordionStyled>
  );
};

export default Accordion;
