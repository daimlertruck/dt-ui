import { useTheme } from '@emotion/react';

import { CloseIcon } from '../../core/assets';
import { BaseProps } from '../../types';

import { TagStyled, TagGroupStyled, TagButtonCloseStyled } from './Tag.styled';
import { TagVariant } from './TagVariants.styled';

export interface TagProps extends BaseProps {
  onClick?: (event: React.MouseEvent<HTMLSpanElement>) => void;
  onClose?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: TagVariant;
  isDisabled?: boolean;
  isClickable?: boolean;
}

export const Tag = ({
  children,
  dataTestId,
  onClick,
  onClose,
  variant = 'colored',
  isDisabled = false,
  isClickable = false,
}: TagProps) => {
  const theme = useTheme();

  return (
    <TagStyled
      data-testid={dataTestId ?? 'tag'}
      isClickable={isClickable || !!onClick}
      onClick={onClick}
      variant={variant}
    >
      {children}
      {onClose && !isDisabled && (
        <TagButtonCloseStyled
          onClick={onClose}
          data-testid={`${dataTestId}-close-button`}
        >
          <CloseIcon
            color={isDisabled ? theme.colors.gray_90 : 'currentColor'}
            width='8px'
            height='8px'
            viewBox='2 2 8 8'
          />
        </TagButtonCloseStyled>
      )}
    </TagStyled>
  );
};

export const TagGroup = ({ children, style }: BaseProps) => {
  return <TagGroupStyled style={style}>{children}</TagGroupStyled>;
};
