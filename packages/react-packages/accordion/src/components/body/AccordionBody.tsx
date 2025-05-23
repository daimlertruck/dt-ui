import { BaseProps } from '@dt-ui/react-core';

import { BodyStyled } from './AccordionBody.styled';

export interface AccordionBodyProps extends BaseProps {
  isOpenState: boolean;
}

export const AccordionBody = ({
  isOpenState,
  children,
  dataTestId,
  style,
}: AccordionBodyProps) => (
  <BodyStyled
    aria-expanded={isOpenState}
    data-testid={dataTestId ?? 'accordion-body'}
    isOpenState={isOpenState}
    style={style}
  >
    <div>{children}</div>
  </BodyStyled>
);
