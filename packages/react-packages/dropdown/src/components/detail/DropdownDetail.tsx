import { BaseProps } from '@dt-ui/react-core';
import { Typography } from '@dt-ui/react-typography';

import { DropdownDetailStyled } from './DropdownDetail.styled';

export interface DropdownDetailProps extends BaseProps {
  isDisabled?: boolean;
  hasError?: boolean;
}

export const DropdownDetail = ({
  dataTestId,
  isDisabled = false,
  hasError = false,
  children = '',
}: DropdownDetailProps) => {
  const messageColor = isDisabled ? 'content.light' : 'content.medium';

  return (
    <DropdownDetailStyled data-testid={dataTestId ?? 'dropdown-text'}>
      <Typography
        color={hasError ? 'error.default' : messageColor}
        element='span'
        fontStyles='body3'
      >
        {children}
      </Typography>
    </DropdownDetailStyled>
  );
};
