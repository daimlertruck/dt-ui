import { useTheme } from '@emotion/react';
import { forwardRef } from 'react';

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

interface TagComponent
  extends React.ForwardRefExoticComponent<
    TagProps & React.RefAttributes<HTMLSpanElement>
  > {
  Group?: ({ children, style }: BaseProps) => JSX.Element;
}

export const Tag: TagComponent = forwardRef<HTMLSpanElement, TagProps>(
  (
    {
      children,
      dataTestId,
      onClick,
      onClose,
      variant = 'colored',
      isDisabled = false,
      isClickable = false,
    },
    ref
  ) => {
    const theme = useTheme();
    const isDismissible = !!onClose;

    return (
      <TagStyled
        data-testid={dataTestId ?? 'tag'}
        isClickable={isClickable || !!onClick}
        onClick={onClick}
        variant={variant}
        ref={ref}
      >
        {children}
        {isDismissible && !isDisabled && (
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
  }
);

Tag.Group = ({ children, style }: BaseProps) => {
  return <TagGroupStyled style={style}>{children}</TagGroupStyled>;
};
