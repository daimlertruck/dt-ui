import { BaseProps } from '@dt-dds/react-core';

import { DropdownMenuStyled } from './DropdownMenu.styled';

export const DropdownMenu = ({ children, dataTestId, style }: BaseProps) => {
  return (
    <DropdownMenuStyled
      data-testid={`${dataTestId ? dataTestId + '-' : ''}menu`}
      style={style}
    >
      {children}
    </DropdownMenuStyled>
  );
};
