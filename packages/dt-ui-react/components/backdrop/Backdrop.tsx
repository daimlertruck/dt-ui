import { forwardRef } from 'react';

import { BaseProps } from '../../types';

import { BackdropStyled } from './Backdrop.styled';
import { BackdropType } from './constants';

export interface BackdropProps extends BaseProps {
  isOpen: boolean;
  type?: BackdropType;
}

export const Backdrop = forwardRef<HTMLDivElement, BackdropProps>(
  (
    {
      isOpen = false,
      type = BackdropType.Dark,
      children,
      dataTestId,
    }: BackdropProps,
    ref
  ) => {
    return (
      <>
        {isOpen && (
          <BackdropStyled
            type={type}
            data-testid={dataTestId ?? 'backdrop'}
            ref={ref}
          >
            {children}
          </BackdropStyled>
        )}
      </>
    );
  }
);
