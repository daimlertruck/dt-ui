import { Spinner } from '@dt-dds/react-spinner';

import { ModalLoadingOverlayStyled } from './LoadingOverlay.styled';

export const ModalLoadingOverlay = () => {
  return (
    <ModalLoadingOverlayStyled>
      <Spinner size='extra-large' />
    </ModalLoadingOverlayStyled>
  );
};
