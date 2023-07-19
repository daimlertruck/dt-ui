import { BaseProps } from '../../../../types';

import { DropdownDetailStyled } from './DropdownDetail.styled';

export const DropdownDetail = ({ children, dataTestId }: BaseProps) => {
  return (
    <DropdownDetailStyled data-testid={dataTestId ?? 'dropdown-text'}>
      {children}
    </DropdownDetailStyled>
  );
};
