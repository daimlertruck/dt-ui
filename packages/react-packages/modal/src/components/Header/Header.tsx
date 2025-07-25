import { Box } from '@dt-ui/react-box';
import { BaseProps } from '@dt-ui/react-core';
import { Icon } from '@dt-ui/react-icon';
import { IconButton } from '@dt-ui/react-icon-button';
import { Typography } from '@dt-ui/react-typography';

import { HeaderStyled } from './Header.styled';

export interface ModalHeaderProps extends Omit<BaseProps, 'children'> {
  hasBorder?: boolean;
  title: string;
  subTitle?: string;
  closeIconLabel?: string;
  onClose: () => void;
}

export const ModalHeader = ({
  dataTestId,
  onClose,
  hasBorder = false,
  title,
  subTitle,
  style,
}: ModalHeaderProps) => {
  return (
    <HeaderStyled
      data-testid={dataTestId ?? 'modal-header'}
      hasBorder={hasBorder}
      style={style}
    >
      <Box style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
        <Typography color='content.dark' element='h4' fontStyles='h4'>
          {title}
        </Typography>

        <IconButton color='accent' dataTestId='close-button' onClick={onClose}>
          <Icon code='close' size='l' />
        </IconButton>
      </Box>
      {subTitle ? (
        <Typography color='content.default' element='h5' fontStyles='body1'>
          {subTitle}
        </Typography>
      ) : null}
    </HeaderStyled>
  );
};
