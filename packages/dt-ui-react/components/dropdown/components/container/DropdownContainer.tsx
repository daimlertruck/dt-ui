import { useRef } from 'react';

import { BaseProps } from '../../../../types';
import { useClickOutside } from '../../../../utils';
import { useDropdownContext } from '../../context';

export const DropdownContainer = ({
  children,
  style,
  dataTestId,
}: BaseProps) => {
  const { setIsOpen } = useDropdownContext();

  const ref = useRef<HTMLDivElement>(null);

  useClickOutside({ ref, handler: () => setIsOpen(false) });

  return (
    <div data-testid={dataTestId} ref={ref} style={style}>
      {children}
    </div>
  );
};
