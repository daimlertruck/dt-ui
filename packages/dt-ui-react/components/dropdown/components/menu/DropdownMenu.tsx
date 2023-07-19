import { BaseProps } from '../../../../types';

import { DropdownMenuStyled } from './DropdownMenu.styled';

export const DropdownMenu = ({ children, dataTestId }: BaseProps) => {
  return (
    <DropdownMenuStyled
      data-testid={`${dataTestId ? dataTestId + '-' : ''}menu`}
    >
      {children}
    </DropdownMenuStyled>
  );
};
