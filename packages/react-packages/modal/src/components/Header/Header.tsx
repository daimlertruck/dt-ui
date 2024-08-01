import { Box } from '@dt-ui/react-box';
import { Icon } from '@dt-ui/react-icon';
import { Typography } from '@dt-ui/react-typography';

import { ModalProps } from '../../Modal';

import { HeaderStyled } from './Header.styled';

export interface ModalHeaderProps extends ModalProps {
  hasBackgroundColor?: boolean;
  hasBorder?: boolean;
  title: string;
  subTitle?: string;
  closeIconLabel?: string;
}

export const ModalHeader = ({
  dataTestId,
  handleClose,
  hasBackgroundColor = false,
  hasBorder = false,
  title,
  subTitle,
}: ModalHeaderProps) => {
  return (
    <HeaderStyled
      data-testid={dataTestId ?? 'modal-header'}
      hasBackgroundColor={hasBackgroundColor}
      hasBorder={hasBorder}
    >
      <Box style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
        <Typography color='content.dark' element='h4' fontStyles='h4'>
          {title}
        </Typography>

        <Icon
          code='close'
          dataTestId='close-icon'
          onClick={handleClose}
          size='large'
        />
      </Box>
      {subTitle ? (
        <Typography color='content.default' element='h5' fontStyles='body1'>
          {subTitle}
        </Typography>
      ) : null}
    </HeaderStyled>
  );
};
