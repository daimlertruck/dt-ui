import { useRef } from 'react';

import { BaseProps } from '../../../../types';
import { useClickOutside } from '../../../../utils';
import { useMultiSelectContext } from '../../context';

export const MultiSelectContainer = ({ children }: BaseProps) => {
  const { setIsOpen } = useMultiSelectContext();

  const ref = useRef<HTMLDivElement>(null);

  useClickOutside({ ref, handler: () => setIsOpen(false) });

  return <div ref={ref}>{children}</div>;
};
