import { BaseProps } from '@dt-ui/react-core';
import { IconButton } from '@dt-ui/react-icon-button';

import { CloseIcon } from '../../../../../dt-ui-react/core';
import { useDrawerContext } from '../../context/DrawerProvider';

import { HeaderStyled } from './DrawerHeader.styled';

export const DrawerHeader = ({ children }: BaseProps) => {
  const { handleClose } = useDrawerContext();

  return (
    <HeaderStyled data-testid='drawer-header'>
      <div>{children}</div>
      <IconButton
        color='default'
        dataTestId='drawer-close-button'
        onClick={handleClose}
      >
        <CloseIcon />
      </IconButton>
    </HeaderStyled>
  );
};
